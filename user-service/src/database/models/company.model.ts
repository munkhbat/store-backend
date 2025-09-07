import { DataTypes, Model, Sequelize } from "sequelize";
import { BaseModel } from "./base.model";

class Company extends Model {
  public id!: string;
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        ...BaseModel.baseFields,
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        register: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        foundedDate: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        annualIncome: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        image: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      { sequelize, modelName: "company", timestamps: true }
    );
  }
}

export default Company;
