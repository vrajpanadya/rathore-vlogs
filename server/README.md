# Rathore Vlogs - MySQL Backend

The website and admin panel require this API. There is no demo or browser
content database. If this service or MySQL is offline, the frontend displays a
database connection error instead of stale content.

## Database tables

| Table | Purpose |
| --- | --- |
| `users` | Admin accounts with bcrypt password hashes |
| `settings` | General page copy and social links as JSON |
| `videos` | Video records, thumbnails, labels, and display order |
| `gallery_items` | Gallery images, captions, likes, and display order |

Videos and gallery records are read from their dedicated tables on every
`GET /api/site` request. Admin saves update all content in a single MySQL
transaction.

## Setup

From the project root:

```bash
mysql -u root -p < server/schema.sql
cp server/.env.example .env
# Edit .env with your MySQL credentials.
node server/seed.js
node server/index.js
```

The API starts at `http://localhost:4000` by default. Open the frontend after
the API is running. For a deployed frontend, set `VITE_API_URL` at build time
or enter the public API address on the database connection screen.

Default first-login credentials are `admin` / `admin123`. Change the password
from Admin Panel -> Settings immediately after setup.

## API endpoints

| Method | Route | Auth | Description |
| --- | --- | --- | --- |
| GET | `/api/health` | No | Checks both API and MySQL connectivity |
| GET | `/api/site` | No | Loads the complete public website |
| GET | `/api/videos` | No | Reads the normalized `videos` table |
| GET | `/api/gallery` | No | Reads the normalized `gallery_items` table |
| POST | `/api/admin/login` | No | Returns a 12-hour bearer token |
| PUT | `/api/site` | Bearer | Transactionally saves settings, videos, and gallery |
| POST | `/api/admin/password` | Bearer | Changes the database admin password |

## Environment

```env
PORT=4000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=
DB_NAME=kirti_site
SECRET=replace-with-a-long-random-secret
CORS_ORIGIN=http://localhost:5173
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
```

Use the frontend origin for `CORS_ORIGIN` in production, for example
`https://yourdomain.com`.