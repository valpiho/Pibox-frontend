export class UserRegistrationDto {
  public firstName: string;
  public lastName: string;
  public username: string;
  public password: string;
  public email: string;

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.password = '';
    this.email = '';
  }
}
