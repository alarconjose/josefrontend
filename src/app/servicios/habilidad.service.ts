import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habilidad } from '../model/habilidad';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  URL = "http://localhost:8080/" + 'habilidad/';

  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Habilidad[]> {
    return this.httpClient.get<Habilidad[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Habilidad> {
    return this.httpClient.get<Habilidad>(this.URL + `detail/${id}`)
  }

  public save(habilidad: Habilidad): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', habilidad);
  }

  public update(id: number, habilidad: Habilidad): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, habilidad);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
