import {Group} from "./group";

export class Department {
  public departmentId: string;
  public title: string;
  public description: string;
  public country: string;
  public city: string;
  public createdAt: Date;
  public updatedAt: Date;
  public isPublic: boolean;
  public isActive: boolean;
  public group: Group;
  public courses: [];
  public users: [];
  public posts: [];


  constructor() {
    this.departmentId = '';
    this.title = '';
    this.description = '';
    this.country = '';
    this.city = '';
    this.createdAt = null;
    this.updatedAt = null;
    this.isPublic = false;
    this.isActive = false;
    this.group = null;
    this.courses = [];
    this.users = [];
    this.posts = [];
  }
}
