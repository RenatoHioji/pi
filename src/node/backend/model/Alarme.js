const { DataTypes } = require('sequelize');
const sequelize = require('../config/database')
const BaseModel = require('baseModel');

class Alarme extends BaseModel{
    static init() {
        return super.init({
          alarme_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          pessoa_id: {
            type: DataTypes.INTEGER,
            allowNull: false

          },
          acao: {
            type: DataTypes.STRING(255),
            allowNull: false
          },
          horario: {
            type: DataTypes.TIME,
            allowNull: false
          },
          diaDaSemana: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        },
          {
          sequelize,
          tableName: 'alarme',
          modelName: 'Alarme' 
        });
      }
      static assoacite(models){
        Alarme.belongsTo(models.Login, {
            foreignKey: "pessoa_id"
        })
      }
}

module.exports = Alarme