export default (sequelize, dataTypes) => {
  return sequelize.define(
    "City",
    {
      id: {
        type: dataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: dataTypes.STRING(100),
        allowNull: false,
        unique: true,
      },
    },
    {
      tableName: "city",
      underscored: true,
    }
  );
};
