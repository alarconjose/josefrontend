import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  URL = "http://localhost:8080/" + 'banner/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Banner[]> {
    return this.httpClient.get<Banner[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Banner> {
    return this.httpClient.get<Banner>(this.URL + `detail/${id}`)
  }

  public save(Banner: Banner): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', Banner);
  }

  public update(id: number, Banner: Banner): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, Banner);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
