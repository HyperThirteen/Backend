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
        allowNull: false,
      },
      content: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
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
    Board.belongsTo(models.Category, {
      foreignKey: "c_id",
      targetKey: "c_id",
      onDelete: "CASCADE",
    });
  };

  return Board;
};
