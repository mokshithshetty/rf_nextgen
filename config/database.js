require('dotenv').config()
module.exports = {
    databases: {
        RF_ARC_DB: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.RF_ARC_DB,
            host: process.env.DB_HOST,
            dialect: 'mysql',
            logging:
                // eslint-disable-next-line
                process.env.NODE_ENV == 'development' ? console.log : false,
        },
        RF_CRM_DB: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.RF_CRM_DB,
            host: process.env.DB_HOST,
            dialect: 'mysql',
            logging:
                // eslint-disable-next-line
                process.env.NODE_ENV == 'development' ? console.log : false,
        },
        RF_DBD_DB: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.RF_DBD_DB,
            host: process.env.DB_HOST,
            dialect: 'mysql',
            logging:
                // eslint-disable-next-line
                process.env.NODE_ENV == 'development' ? console.log : false,
        },
        RF_EML_DB: {
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.RF_EML_DB,
            host: process.env.DB_HOST,
            dialect: 'mysql',
            logging:
                // eslint-disable-next-line
                process.env.NODE_ENV == 'development' ? console.log : false,
        }
    },

    // For migrations
    RF_ARC_DB: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.RF_ARC_DB,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    },
    RF_CRM_DB: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.RF_CRM_DB,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    },
    RF_DBD_DB: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.RF_DBD_DB,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    },
    RF_EML_DB: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.RF_EML_DB,
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false
    }
}
