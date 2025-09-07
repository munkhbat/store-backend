import Joi from "joi";
import { ICreateUser } from "../interfaces/user.interface";

const userSchema = Joi.object({
  name: Joi.string().required().min(5).max(30).messages({}),
  email: Joi.string().required().lowercase().email().messages({}),
  password: Joi.string().required().min(6).required().messages({}),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({}),
});

export const validateSignUp = async (
  doc: ICreateUser
): Promise<Partial<ICreateUser>> => {
  const { error, value } = userSchema.validate(doc, {
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
