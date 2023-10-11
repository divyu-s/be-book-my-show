export default (sequelize, dataTypes) => {
  return sequelize.define(
    "City",
    {
      cityId: {
        type: dataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
      },
      cityName: {
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
