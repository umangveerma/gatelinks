import { randomBytes, scryptSync } from "node:crypto";

import constants from "../constants/constants";

const createResourceId = (
  email: string,
  title: string,
  verificationType: string
) => {
  if (!constants.verificationTypes.includes(verificationType)) {
    throw new Error("Invalid verification type");
  }

  const salt = randomBytes(16).toString("hex");
  const hashedEmail = scryptSync(email, salt, 16).toString("hex");
  const resourceId =
    scryptSync(title, hashedEmail, 16).toString("hex") + `-${verificationType}`;

  return resourceId;
};

export default createResourceId;
