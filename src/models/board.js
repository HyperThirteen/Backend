const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Board = sequelize.define(
    "Board",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      s_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.NOW,
      },
      c_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "board",
      timestamps: true,
    }
  );

  Board.associate = function (models) {
    Board.belongsTo(models.category, {
      // 'models.category' 대신 'models.Category'
      foreignKey: "c_id",
      targetKey: "c_id",
      onDelete: "CASCADE",
    });
  };

  return Board;
};
