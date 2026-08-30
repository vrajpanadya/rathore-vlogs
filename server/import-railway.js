const fs = require("fs");
const path = require("path");
const mysql = require("mysql2/promise");

async function main() {
  const publicUrl =
    process.env.MYSQL_PUBLIC_URL;

  if (!publicUrl) {
    throw new Error(
      "MYSQL_PUBLIC_URL not found"
    );
  }

  const url =
    new URL(publicUrl);

  const connection =
    await mysql.createConnection({
      host: url.hostname,
      port: Number(
        url.port || 3306
      ),
      user:
        decodeURIComponent(
          url.username
        ),
      password:
        decodeURIComponent(
          url.password
        ),
      database:
        url.pathname.replace(
          /^\//,
          ""
        ),
      multipleStatements: true,
    });

  console.log(
    "Connected to Railway MySQL ✅"
  );

  const schemaPath =
    path.join(
      __dirname,
      "schema.sql"
    );

  let sql =
    fs.readFileSync(
      schemaPath,
      "utf8"
    );

  // Railway database already exists.
  // Remove local CREATE DATABASE / USE statements.
  sql = sql
    .replace(
      /CREATE\s+DATABASE[\s\S]*?;/gi,
      ""
    )
    .replace(
      /USE\s+[`'"]?[A-Za-z0-9_-]+[`'"]?\s*;/gi,
      ""
    );

  await connection.query(
    sql
  );

  console.log(
    "schema.sql imported successfully ✅"
  );

  const [
    tables,
  ] =
    await connection.query(
      "SHOW TABLES"
    );

  console.log(
    "\nTables:"
  );

  console.table(
    tables
  );

  await connection.end();
}

main().catch(
  (error) => {
    console.error(
      "Import failed ❌"
    );

    console.error(
      error
    );

    process.exit(1);
  }
);