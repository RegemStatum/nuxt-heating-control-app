import ClientErrorType from "./clientErrorType";

class FirestoreDocumentNotFoundError extends Error {
  type: ClientErrorType;

  constructor(message: string) {
    super(message);
    this.type = ClientErrorType.FIRESTORE_DOCUMENT_NOT_FOUND;
  }
}

export default FirestoreDocumentNotFoundError;
