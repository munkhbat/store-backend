import { DataTypes, Model } from "sequelize";
import { STATUS, STATUS_ENUM } from "../../utils/consts";

export class BaseModel extends Model {
  public static baseFields = {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    status: {
      type: DataTypes.ENUM,
      values: STATUS_ENUM,
      defaultValue: STATUS.ACTIVE,
      allowNull: false,
    },
    created_user_id: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      allowNull: false,
    },
    updated_user_id: {
      type: DataTypes.UUID,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      allowNull: false,
    },
  };
}
