export class User {
  public id: string;
  public firstName: string;
  public lastName: string;
  public username: string;
  public email: string;
  public profileImgUrl: string;
  public joinDate: Date;
  public lastLoginDate: Date;
  public active: boolean;
  public role: string;
  public authorities: [];

  constructor() {
    this.id = '';
    this.firstName = '';
    this.lastName = '';
    this.username = '';
    this.email = '';
    this.profileImgUrl = '';
    this.joinDate = null;
    this.lastLoginDate = null;
    this.active = false;
    this.role = '';
    this.authorities = [];
  }
}
