import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {Department} from "../../model/department";
import {DepartmentCreationDto} from "../../model/dto/department-creation-dto";

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  public host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getDepartment(groupId: string, departmentId: string): Observable<Department> {
    return this.http.get<Department>(`${this.host}/groups/${groupId}/departments/${departmentId}`)
  }

  getAllGroupDepartments(groupId: string): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.host}/groups/${groupId}/departments/`)
  }

  createNewDepartment(groupId: string, department: DepartmentCreationDto): Observable<HttpResponse<Department>> {
    return this.http.post<Department>(`${this.host}/groups/${groupId}/departments`, department, {observe: 'response'})
  }

  getGroupAllActiveDepartments(groupId: string): Observable<Department[]> {
    return this.http.get<Department[]>(`${this.host}/groups/${groupId}/departments`)
  }
}
