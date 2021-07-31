export class Group {
  public groupId: string;
  public title: string;
  public description: string;
  public groupImgUrl: string;
  public createdAt: Date;
  public updatedAt: Date;
  public isPublic: boolean;
  public isActive: boolean;
  public groupOwnerUserId: string;

  constructor() {
    this.groupId = '';
    this.title = '';
    this.description = '';
    this.groupImgUrl = '';
    this.createdAt = null;
    this.updatedAt = null;
    this.isPublic = false;
    this.isActive = false;
    this.groupOwnerUserId = '';
  }
}
