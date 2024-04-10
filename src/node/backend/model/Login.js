const { DataTypes } = require('sequelize');
const BaseModel = require('baseModel');

class Pessoa extends BaseModel {
    static init() {
      return super.init({
        pessoa_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        cpf: {
          type: DataTypes.STRING(14),
          allowNull: false
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        senha: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        nome: {
          type: DataTypes.STRING(255),
          allowNull: false
        },
        dtNasc: {
          type: DataTypes.DATEONLY,
          allowNull: false
        }
      }, {
        sequelize,
        tableName: 'pessoa' 
      });
    }
  }
  
  module.exports = Pessoa;