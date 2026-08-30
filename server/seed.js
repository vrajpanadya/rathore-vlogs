  // /**
  //  * Seed the admin user with a bcrypt-hashed password.
  //  * Usage:  node seed.js
  //  * Reads ADMIN_USERNAME / ADMIN_PASSWORD from .env (defaults: admin / admin123)
  //  */
  // require("dotenv").config();
  // const bcrypt = require("bcryptjs");
  // const mysql = require("mysql2/promise");

  // async function main() {
  //   const username = process.env.ADMIN_USERNAME || "admin";
  //   const password = process.env.ADMIN_PASSWORD || "admin123";
  //   const hash = await bcrypt.hash(password, 10);

  //   const db = await mysql.createConnection({
  //     host: process.env.DB_HOST || "localhost",
  //     user: process.env.DB_USER || "root",
  //     password: process.env.DB_PASSWORD || "",
  //     database: process.env.DB_NAME || "kirti_site",
  //   });

  //   await db.execute(
  //     `INSERT INTO users (username, password_hash) VALUES (?, ?)
  //     ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)`,
  //     [username, hash]
  //   );

  //   console.log(`✔ Admin user "${username}" ready (password: ${password})`);
  //   await db.end();
  // }

  // main().catch((err) => {
  //   console.error("Seed failed:", err.message);
  //   process.exit(1);
  // });
// require("dotenv").config();

// const bcrypt = require("bcryptjs");
// const mysql = require("mysql2/promise");

// async function main() {
//   const username = process.env.ADMIN_USERNAME || "Rathore vlogs";
//   const password = process.env.ADMIN_PASSWORD || "kirti_rathore0105";

//   const hash = await bcrypt.hash(password, 12);

//   const db = await mysql.createConnection({
//     host: process.env.DB_HOST || "localhost",
//     user: process.env.DB_USER || "root",
//     password: process.env.DB_PASSWORD || "",
//     database: process.env.DB_NAME || "bjp",
//   });

//   try {
//     await db.execute(
//       `INSERT INTO users (username, password_hash)
//        VALUES (?, ?)
//        ON DUPLICATE KEY UPDATE password_hash = VALUES(password_hash)`,
//       [username, hash]
//     );

//     console.log(`Admin user "${username}" ready.`);
//   } finally {
//     await db.end();
//   }
// }

// main().catch((err) => {
//   console.error("Seed failed:", err.message);
//   process.exit(1);
// });
require("dotenv").config();

const bcrypt = require("bcryptjs");
const mysql = require("mysql2/promise");

async function main() {
  const username =
    process.env.ADMIN_USERNAME ||
    "Rathore vlogs";

  const password =
    process.env.ADMIN_PASSWORD ||
    "kirti_rathore0105";

  const hash = await bcrypt.hash(
    password,
    12
  );

  const db =
    await mysql.createConnection({
      host:
        process.env.DB_HOST ||
        process.env.MYSQLHOST ||
        "localhost",

      port: Number(
        process.env.DB_PORT ||
        process.env.MYSQLPORT ||
        3306
      ),

      user:
        process.env.DB_USER ||
        process.env.MYSQLUSER ||
        "root",

      password:
        process.env.DB_PASSWORD ||
        process.env.MYSQLPASSWORD ||
        "",

      database:
        process.env.DB_NAME ||
        process.env.MYSQLDATABASE ||
        "bjp",
    });

  try {
    await db.execute(
      `INSERT INTO users (
        username,
        password_hash
      )
      VALUES (?, ?)
      ON DUPLICATE KEY UPDATE
      password_hash = VALUES(password_hash)`,
      [username, hash]
    );

    console.log(
      `✅ Admin user "${username}" ready.`
    );

    console.log(
      "✅ Password securely stored as bcrypt hash."
    );
  } finally {
    await db.end();
  }
}

main().catch((err) => {
  console.error(
    "❌ Seed failed:",
    err.message
  );

  process.exit(1);
});