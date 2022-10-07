const mysql = require('mysql2/promise')

const config = {
    host: process.env.DB_HOST,
    database: process.env.RF_CRM_DB,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
}

async function query(sql, params) {
    const connection = await mysql.createConnection(config)

    const [results] = await connection.execute(sql, params)
    connection.destroy()
    return results
}

module.exports = {
    query
}
