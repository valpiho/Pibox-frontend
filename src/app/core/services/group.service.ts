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

  public createNewGroup(group: Group): Observable<Group> {
    return this.http.post<Group>(`${this.host}/group/create`, group)
  }
}
