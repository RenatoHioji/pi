const path = require("path")
const env = process.env.NODE_ENV || "development" 
const configPath= path.join(__dirname, "config", "config.json")
const config = require(configPath)[env]

const sequelize = new Sequelize(config.database, config.username, config.password, config);
async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
testConnection();
