import oracledb from 'oracledb';

oracledb.initOracleClient({ libDir: 'C:/instantclient_21_7' });

const PROD_CONFIG = {
  host: 'localhost:3306',
  user: 'root',
  password: 'root',
  database: 'api',
  connectTimeout: 15000,
  options: {
    encrypt: false,
  },
  dateStrings: true,
};

const HMG_CONFIG = {
  host: 'localhost:3306',
  user: 'root',
  password: 'root',
  database: 'api',
  connectTimeout: 15000,
  options: {
    encrypt: false,
  },
  dateStrings: true,
};

const POOL = {
  min: 10,
  max: 30,
  createTimeoutMillis: 3000,
  acquireTimeoutMillis: 60000,
  idleTimeoutMillis: 30000,
  reapIntervalMillis: 1000,
  createRetryIntervalMillis: 100,
  propagateCreateError: false,
};

export default {
  development: {
    client: 'oracledb',
    connection: HMG_CONFIG,
    pool: POOL,
  },
  homolog: {
    client: 'oracledb',
    connection: HMG_CONFIG,
    pool: POOL,
  },
  production: {
    client: 'oracledb',
    connection: PROD_CONFIG,
    pool: POOL,
  },
};
