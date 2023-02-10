const dotenv = require('dotenv')
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

module.exports = {
    prefix: process.env.PREFIX,
    token: process.env.USER_PASSWORD,
    suffix: process.env.SUFFIX
}
