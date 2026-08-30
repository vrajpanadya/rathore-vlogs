require("dotenv").config();

const bcrypt = require("bcryptjs");
const mysql = require("mysql2/promise");

async function main() {
  const publicUrl = process.env.MYSQL_PUBLIC_URL;

  if (!publicUrl) {
    throw new Error("MYSQL_PUBLIC_URL not found");
  }

  const url = new URL(publicUrl);

  const username = "Rathore vlogs";
  const password = "kirti_rathore0105";

  const hash = await bcrypt.hash(password, 12);

  const db = await mysql.createConnection({
    host: url.hostname,
    port: Number(url.port || 3306),
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.replace(/^\//, ""),
  });

  try {
    await db.execute(
      `
      INSERT INTO users (
        username,
        password_hash
      )
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE
        password_hash = VALUES(password_hash)
      `,
      [username, hash]
    );

    console.log(`✅ Railway admin "${username}" reset successfully.`);
  } finally {
    await db.end();
  }
}

main().catch((err) => {
  console.error("❌ Reset failed:", err.message);
  process.exit(1);
});