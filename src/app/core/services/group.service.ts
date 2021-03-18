import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Group} from "../../model/group";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class GroupService {

  public host = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public createNewGroup(group: Group): Observable<HttpResponse<Group>> {
    return this.http.post<Group>(`${this.host}/groups/create`, group, {observe: "response"})
  }

  public getGroup(groupId: string): Observable<Group> {
    return this.http.get<Group>(`${this.host}/groups/${groupId}`);
  }

  public getAllActivePublicGroups(): Observable<Group[]> {
    return this.http.get<Group[]>(`${this.host}/groups/`)
  }

  public getAllUserGroupsByUserId(userId: string): Observable<Group[]> {
    return this.http.post<Group[]>(`${this.host}/groups/user-groups/`, userId)
  }
}
