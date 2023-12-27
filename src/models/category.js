module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      c_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      c_name: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    },
    {
      tableName: "category",
    }
  );
  return Category;
};
