module.exports = (sequelize, DataTypes) => {
  const Blacklist = sequelize.define(
    "Blacklist",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      s_id: {
        type: DataTypes.INTEGER,
      },
    },
    {
      tableName: "blacklist",
    }
  );
  return Blacklist;
};
