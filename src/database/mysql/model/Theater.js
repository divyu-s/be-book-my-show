export default (sequelize, dataTypes) => {
  return sequelize.define(
    "Theater",
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
      cityId: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      tableName: "theater",
      underscored: true,
    }
  );
};
