{
  "database": {
    "host": "db.staging.com",
    "port": 5432,
    "name": "staging_db_v2",
    "ssl": false,
    "timeout": 45000,
    "pool": {
      "min": 5,
      "max": 20
    },
    "logging": true,
    "backup_enabled": true
  },
  "cache": {
    "provider": "memcached",
    "host": "cache.staging.com",
    "port": 11211,
    "ttl": 3600
  }
}
