import { DataTypes, Model, Sequelize } from "sequelize";
import { BaseModel } from "./base.model";

class User extends Model {
  public id!: string;
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        ...BaseModel.baseFields,
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(100),
        },
      },
      { sequelize, modelName: "user", timestamps: true }
    );
  }
}

export default User;
