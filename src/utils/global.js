// Global Variables
global.AppError = require('./appError');
global.models = require('../models');
global.Sequelize = require('sequelize');

global.Op = Sequelize.Op;
global.db = require('../../config/dbConn');
