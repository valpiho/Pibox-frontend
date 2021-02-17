import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Group} from "../../model/group";
import {Observable} from "rxjs";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  public host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public createNewGroup(group: Group): Observable<HttpResponse<Group>> {
    return this.http.post<Group>(`${this.host}/group/create`, group, {observe: "response"})
  }

  public getGroup(groupId: string): Observable<Group> {
    return this.http.get<Group>(`${this.host}/group/${groupId}`);
  }

  public addGroupToLocalCache(group: Group): void {
    localStorage.setItem('group', JSON.stringify(group));
  }

  public getGroupFromLocalCache(): Group {
    return JSON.parse(localStorage.getItem('group'));
  }
}
