const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
const basename = path.basename(module.filename)
const config = require('../../config/database')
const { dbName } = require('../constants')

// Loop through
const db = {}
const databases = Object.keys(config.databases)

// eslint-disable-next-line
for (let item of databases) {
    let database = item
    let dbPath = config.databases[database]
    db[database] = new Sequelize(dbPath)
}

// Add models from RF_ARC_DB folder
dbName.forEach((item) => {
    fs.readdirSync(__dirname + '/' + item)
        .filter(
            (file) =>
                file.indexOf('.') !== 0 &&
                file !== basename &&
                file.slice(-3) === '.js'
        )
        .forEach((file) => {
            const model = require(path.join(__dirname + '/' + item, file))(
                db[item],
                Sequelize.DataTypes
            )
            db[model.name] = model
        })
})

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

module.exports = db
