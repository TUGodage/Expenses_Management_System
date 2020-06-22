import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  add(body){
    return this.http.post(environment.BASE_URL + 'expense', body);
  }

  update(body){
    return this.http.put(environment.BASE_URL + 'expense', body);
  }
}
