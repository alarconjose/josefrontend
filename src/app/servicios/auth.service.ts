import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { LoginUsuario } from '../model/login-usuario';
import { DtoJwt } from '../model/dto-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  URL = "http://localhost:8080/" + 'auth/';

  constructor(private httpClient: HttpClient, private tokenService: TokenService) { }

  public isLogged(): boolean {
    const token = this.tokenService.getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

public login(loginUsuario: LoginUsuario): Observable<DtoJwt> {
    return this.httpClient.post<DtoJwt>(this.URL + 'login', loginUsuario);

  }
}
