import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Social } from '../model/social';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialService {
  URL = "https://portfoliojose.onrender.com/" + 'social/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Social[]> { 
    return this.httpClient.get<Social[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Social> {
    return this.httpClient.get<Social>(this.URL + `detail/${id}`)
  }

  public save(social: Social): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', social);
  }

  public update(id: number, social: Social): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, social);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}