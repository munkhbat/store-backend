import { CompanyModel } from "../database";
import Company from "../database/models/company.model";
import {
  ICreateCompany,
  IUpdateCompany,
} from "../interfaces/company.interface";
import {
  validateCreateCompany,
  validateUpdateCompany,
} from "../validations/company.validation";

export class CompanyController {
  static async idCheck(id: string): Promise<Company> {
    const db: Company | null = await CompanyModel.findByPk(id);
    if (!db) throw new Error(i18n.__("error.not_found"));
    return db;
  }

  static async create(doc: ICreateCompany, user: any) {
    const filtered = await validateCreateCompany(doc);

    const [db, created] = await CompanyModel.findOrCreate({
      where: {
        register: filtered.register,
      },
      ...filtered,
    });

    if (!created) throw new Error(i18n.__("model.already_created"));

    return db.id;
  }

  static async update(doc: IUpdateCompany, user: any) {
    const filtered = await validateUpdateCompany(doc);

    await this.idCheck(filtered.id || "");
  }
}
