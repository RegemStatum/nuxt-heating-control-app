import ClientErrorType from "./clientErrorType";

class InvalidInputError extends Error {
  type: ClientErrorType;
  inputName?: string;

  constructor(message: string, inputName?: string) {
    super(message);
    this.type = ClientErrorType.INVALID_INPUT;
    this.inputName = inputName || "";
  }
}

export default InvalidInputError;
