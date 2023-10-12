export default (sequelize, dataTypes) => {
  return sequelize.define(
    "Showtime",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: dataTypes.DATEONLY,
        allowNull: false,
      },
      time: {
        type: dataTypes.TIME,
        allowNull: false,
      },
      movieId: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
      theaterId: {
        type: dataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      tableName: "showtime",
      underscored: true,
    }
  );
};
