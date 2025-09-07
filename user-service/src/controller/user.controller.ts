import { UserModel } from "../database";
import User from "../database/models/user.model";
import i18n from "i18n";
import { ICreateUser } from "../interfaces/user.interface";
import { validateSignUp } from "../validations/user.validation";
import { generatePassword } from "../utils";

// user controller
export default class UserController {
  // check user by id
  static async idCheck(id: string): Promise<User> {
    const db: User | null = await UserModel.findByPk(id);
    if (!db) throw new Error(i18n.__("error.model.not_found"));
    return db;
  }

  static async signUp(doc: ICreateUser): Promise<string> {
    const filtered = await validateSignUp(doc);

    const password = await generatePassword(doc.password);

    const [user, created] = await UserModel.findOrCreate({
      where: { email: filtered.email },
      defaults: {
        ...filtered,
        password: password,
      },
    });
    if (!created) throw new Error(i18n.__("error.model.already_created"));

    return user.id;
  }
}
