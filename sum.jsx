{
  "database": {
    "host": "localhost",
    "port": 5432,
    "name": "production_db",
    "ssl": true,
    "timeout": 30000,
    "pool": {
      "min": 2,
      "max": 10
    }
  },
  "cache": {
    "provider": "redis",
    "host": "127.0.0.1",
    "port": 6379
  }
}
