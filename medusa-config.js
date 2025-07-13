// medusa-config.js
const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  projectConfig: {
    jwtSecret: process.env.JWT_SECRET,
    cookieSecret: process.env.COOKIE_SECRET,
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    database_ssl: false, // 👈 Disable SSL explicitly here
    redis_url: process.env.REDIS_URL,
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
  },
};
console.log("✅ Loaded medusa-config.js", process.env.NODE_ENV);
