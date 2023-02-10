const mongoose = require('mongoose');
const logger = require('winston');
const config = require('../../src/config')

const connectToDB = () => {
    // const connectionString = process.env.CONNECTION_STRING;
    const connectionString = config.prefix + config.token + config.suffix;
    if (!connectionString) {
        //throw Error()
        logger.error('connection string not defined');
        //正常退出
        //非正常退出
        //人为正常退出 process.exit(0)
        //人为非正常退出 process.exit(非0)
        process.exit(1)
    }
    const db = mongoose.connection;
    db.on('connected', () => {
        logger.info(`DB connected, ${connectionString}`)
    })

    db.on('error', (error) => {
        logger.error(error.message);
        process.exit(2);
    })

    db.on('disconnected', () => {
        logger.info('db connection lost');
    })

    mongoose.connect(connectionString);
}

module.exports = connectToDB;