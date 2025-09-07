import dotenv from "dotenv";
import { Options, Sequelize } from "sequelize";
import City from "./models/city.model";
import District from "./models/district.model";
import Horoo from "./models/horoo.model";
import User from "./models/user.model";
import Company from "./models/company.model";
dotenv.config();
const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const sequelize = new Sequelize(<Options>{
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  dialect: "postgres",
  database: DB_NAME,
  logging: false,
});

let models = [City, District, Horoo, User, Company];

models.forEach((model) => model.initialize(sequelize));

// // company has one user
// Company.hasOne(User, {
//   foreignKey: "company_id",
// });

// // user belongs to company
// User.belongsTo(Company, {
//   foreignKey: "company_id",
//   targetKey: "id",
// });

const connectionDb = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true, force: false });
  } catch (err: any) {
    console.log("DB error", err.message);
  }
};

export {
  connectionDb,
  sequelize as Database,
  City as CityModel,
  District as DistrictModel,
  Horoo as HorooModel,
  User as UserModel,
  Company as CompanyModel,
};
