import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListItemService {

  configUrl = 'https://reqres.in/api/users?page=';

  constructor(
    public http: HttpClient
  ) { }

  getUsers(pageNumber: number) {
    return this.http.get(this.configUrl + pageNumber);
  }
}
