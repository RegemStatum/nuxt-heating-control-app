import { InvalidInputError } from "@/errors/client";
import {
  EMAIL_MIN_LENGTH,
  EMAIL_MAX_LENGTH,
} from "~/constants/validation/auth/email";

const checkIsValidEmail = (email: string) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email.toLowerCase());
};

const validateAuthEmail = (email: string, emailInputName?: string) => {
  if (!email || email === "" || email.trim() === "") {
    throw new InvalidInputError("Email must not be empty", emailInputName);
  }

  if (email.length < EMAIL_MIN_LENGTH) {
    throw new InvalidInputError(
      `Email must contain at least ${EMAIL_MIN_LENGTH} characters`,
      emailInputName
    );
  }

  if (email.length > EMAIL_MAX_LENGTH) {
    throw new InvalidInputError(
      `Email must contain at most ${EMAIL_MAX_LENGTH} characters`,
      emailInputName
    );
  }

  const isValidEmail = checkIsValidEmail(email);
  if (!isValidEmail) {
    throw new InvalidInputError(
      "Email must be valid. Please try again",
      emailInputName
    );
  }
};

export default validateAuthEmail;
