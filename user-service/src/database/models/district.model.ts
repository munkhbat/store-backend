import { DataTypes, Model, Sequelize } from "sequelize";

class District extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        city_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "cities",
            key: "id",
          },
        },
      },
      { sequelize, modelName: "district", timestamps: false }
    );
  }
}

export default District;
