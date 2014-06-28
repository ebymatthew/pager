TS=`date | sed 's| |_|g' | sed 's|:|_|g'`
DB_FILE="pager_backup_${TS}.dump"
PGPASSWORD=matt pg_dump -Fc --no-acl --no-owner -h localhost -U postgres pager > ${DB_FILE}

echo "Database Backup Created:"
echo "  ${DB_FILE}"
