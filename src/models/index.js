const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/index")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.board = require("./board")(sequelize, Sequelize);
db.blacklist = require("./blacklist")(sequelize, Sequelize);
db.category = require("./category")(sequelize, Sequelize);
db.user = require("./user")(sequelize, Sequelize);

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
