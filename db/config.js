const { Pool } = require("pg");
require('dotenv').config();

const maxRetries = 5;
let retries = 0;

const createPool = () => {
    return new Pool({
        // user: process.env.DB_USER,
        // host: process.env.DB_HOST,
        // database: process.env.DB_NAME,
        // password: process.env.DB_PASSWORD,
        // port: process.env.DB_PORT,

        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
};

const connectWithRetry = async (pool) => {
    while (retries < maxRetries) {
        try {
            await pool.query('SELECT 1');
            console.log('Connected to the database');
            return pool;
        } catch (err) {
            console.log(err);
            retries++;
            console.log(`Database connection failed. Retrying (${retries}/${maxRetries})...`);
            await new Promise(res => setTimeout(res, 5000));
        }
    }
    throw new Error('Could not connect to the database');
};

const pool = createPool();
connectWithRetry(pool).catch(err => {
    console.error(err);
    process.exit(1);
});

module.exports = pool;