import crypto from "crypto";

// password hash
export const generatePassword = async (password: string): Promise<string> => {
  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  return hashPassword;
};
