export class DepartmentCreationDto {
  public title: string;
  public description: string;
  public country: string;
  public city: string;
  public isPublic: boolean;

  constructor() {
    this.title = '';
    this.description = '';
    this.country = '';
    this.city = '';
    this.isPublic = false;
  }
}
