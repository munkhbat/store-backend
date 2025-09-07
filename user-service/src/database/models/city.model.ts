import { DataTypes, Model, Sequelize } from "sequelize";

class City extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        code: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { sequelize, modelName: "city", timestamps: false }
    );
  }
}

export default City;
