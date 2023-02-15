export class MainModel {
  id?: number;

  error?: any;
  /**
   * Gets or sets an error message.
   */
  errorMessage?: string;
  /**
   * Gets or sets an error code.
   */
  errorCode?: string;


  constructor(id?: number, error?: any, errorMessage?: string, errorCode?: string) {
    this.id = id;
    this.error = error;
    this.errorMessage = errorMessage;
    this.errorCode = errorCode;
  }
}
