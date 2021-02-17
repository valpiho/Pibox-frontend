import {User} from "./user";

export class Group {
  public groupId: string;
  public title: string;
  public abbreviation: string;
  public description: string;
  public groupImgUrl: string;
  public createdAt: Date;
  public updatedAt: Date;
  public isPublic: boolean;
  public isActive: boolean;
  public groupOwner: User;
  public departments: [];
  public users: [];
  public posts: [];

  constructor() {
    this.groupId = '';
    this.title = '';
    this.abbreviation = '';
    this.description = '';
    this.groupImgUrl = '';
    this.createdAt = null;
    this.updatedAt = null;
    this.isPublic = false;
    this.isActive = false;
    this.groupOwner = null;
    this.departments = [];
    this.users = [];
    this.posts = [];
  }
}
