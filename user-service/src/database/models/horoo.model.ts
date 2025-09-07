import { DataTypes, Model, Sequelize } from "sequelize";

class Horoo extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        city_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "cities",
            key: "id",
          },
        },
        district_id: {
          type: DataTypes.INTEGER,
          references: {
            model: "districts",
            key: "id",
          },
        },
      },
      { sequelize, modelName: "horoo", timestamps: false }
    );
  }
}

export default Horoo;
