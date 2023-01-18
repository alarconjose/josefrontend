import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Laboral } from '../model/laboral';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboralService {

  URL = "http://localhost:8080/" + 'laboral/';

  constructor(private httpClient: HttpClient) { }
  public list(): Observable<Laboral[]> { 
    return this.httpClient.get<Laboral[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Laboral> {
    return this.httpClient.get<Laboral>(this.URL + `detail/${id}`)
  }

  public save(laboral: Laboral): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', laboral);
  }

  public update(id: number, laboral: Laboral): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, laboral);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
