export class GroupCreationDto {
  public groupOwnerId: string;
  public title: string;
  public description: string;
  public isPublic: boolean;

  constructor() {
    this.groupOwnerId = '';
    this.title = '';
    this.description = '';
    this.isPublic = false
  }
}
