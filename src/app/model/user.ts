export class User {
  public id: number;
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
  public posts = [];
  public ownGroups = [];
  public groups = [];
  public departments = [];
  public courses = [];

  constructor() {
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
    this.posts = [];
    this.ownGroups = [];
    this.groups = [];
    this.departments = [];
    this.courses = [];
  }
}
