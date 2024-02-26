import { Model, INTEGER, STRING } from "sequelize";
import db from '.'


class People extends Model {

}

People.init(
  {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: STRING,
      allowNull: false,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    modelName: "People",
    tableName: "peoples",
    sequelize: db,
    underscored: true,
    timestamps: false,
  }
);

export default People;