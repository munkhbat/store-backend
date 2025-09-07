import Joi from "joi";
import { register } from "module";
import {
  ICreateCompany,
  IUpdateCompany,
} from "../interfaces/company.interface";

const companySchema = Joi.object({
  name: Joi.string().required().min(2).max(50).messages({}),
  register: Joi.string().required().length(10).messages({}),
  email: Joi.string().email().required().messages({}),
});
const updateCompanySchema = Joi.object({
  id: Joi.string().uuid().required().messages({}),
  name: Joi.string().optional().allow(null, "").messages({}),
  image: Joi.string().uri().optional().allow(null, "").messages({}),
  annualIncome: Joi.number().optional().allow(0).messages({}),
  foundedDate: Joi.string().optional().allow("", null).messages({}),
});
export const validateCreateCompany = async (
  doc: ICreateCompany
): Promise<Partial<ICreateCompany>> => {
  const { error, value } = companySchema.validate(doc, {
    abortEarly: true,
  });

  if (error) {
    throw new Error(
      JSON.stringify({
        isCustom: true,
        i18n: error.details[0].message,
      })
    );
  }

  const filtered = Object.fromEntries(
    Object.entries(value).filter(
      ([_, v]) => v !== undefined && v !== null && v !== ""
    )
  );
  return filtered;
};

export const validateUpdateCompany = async (
  doc: IUpdateCompany
): Promise<Partial<IUpdateCompany>> => {
  const { error, value } = updateCompanySchema.validate(doc, {
    abortEarly: true,
  });

  if (error) {
    throw new Error(
      JSON.stringify({
        isCustom: true,
        i18n: error.details[0].message,
      })
    );
  }

  const filtered = Object.fromEntries(
    Object.entries(value).filter(
      ([_, v]) => v !== undefined && v !== null && v !== ""
    )
  );
  return filtered;
};
