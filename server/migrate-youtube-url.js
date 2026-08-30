require("dotenv").config();

const mysql = require("mysql2/promise");

async function main() {
  const publicUrl = process.env.MYSQL_PUBLIC_URL;

  if (!publicUrl) {
    throw new Error("MYSQL_PUBLIC_URL not found");
  }

  const url = new URL(publicUrl);

  const db = await mysql.createConnection({
    host: url.hostname,
    port: Number(url.port || 3306),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.replace(/^\//, ""),
  });

  try {
    const [columns] = await db.query(
      `SHOW COLUMNS FROM videos LIKE 'youtube_url'`
    );

    if (columns.length === 0) {
      await db.query(`
        ALTER TABLE videos
        ADD COLUMN youtube_url VARCHAR(1000) NULL AFTER thumb
      `);

      console.log("✅ youtube_url column added.");
    } else {
      console.log("✅ youtube_url column already exists.");
    }
  } finally {
    await db.end();
  }
}

main().catch((err) => {
  console.error("❌ Migration failed:", err.message);
  process.exit(1);
});