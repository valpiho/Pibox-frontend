export class User {
  public id: number;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public joinDate: Date;
  public lastLoginDate: Date;
  public active: boolean;
  public role: string;
  public authorities: [];

  constructor() {
    this.id = null;
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.joinDate = null;
    this.lastLoginDate = null;
    this.active = false;
    this.role = '';
    this.authorities = [];
  }
}
