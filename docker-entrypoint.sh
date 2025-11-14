#!/bin/sh

set -e

DB_PATH="/app/prisma/dev.db"

# If the DB file doesn't exist or is literally empty, run migrations.
if [ ! -s "$DB_PATH" ]; then
    echo "Database missing or empty. Running migrations."
    npx prisma migrate deploy
else
    echo "Database exists. Skipping migrations."
fi

exec node server.js
