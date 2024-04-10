const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

class BaseModel extends Model {
  static init(attributes, options) {
    return super.init(attributes, { ...options, sequelize });
  }
}

module.exports = BaseModel;
