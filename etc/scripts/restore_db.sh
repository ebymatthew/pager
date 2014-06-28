
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <dump_file>" >&2
  exit 1
fi

DUMPFILE=${1}

PGPASSWORD=matt pg_restore --verbose --clean --no-acl --no-owner -h localhost -U ebymatthew -d pager ${DUMPFILE} 
