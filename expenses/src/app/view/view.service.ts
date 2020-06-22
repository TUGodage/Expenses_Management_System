import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  constructor(private http: HttpClient) {}

  getList(type) {
    return this.http.get(environment.BASE_URL + 'expense?type=' + type);
  }

  delete(id) {
    return this.http.delete(environment.BASE_URL + 'expense/' + id);
  }
}
