import { DataTypes, Model, Sequelize } from "sequelize";
import { BaseModel } from "./base.model";

class CompanyUser extends Model {
  public static initialize(sequelize: Sequelize) {
    this.init(
      {
        ...BaseModel.baseFields,
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        company_id: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        phoneNo: {
          type: DataTypes.STRING(8),
          allowNull: true,
        },
      },
      { sequelize, modelName: "company-user", timestamps: true }
    );
  }
}

export default CompanyUser;
