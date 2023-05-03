import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  authenticate(email: string, password: string): Observable<HttpResponse<any>>{
    return this.httpClient.post(`${API}/auth`, {
      email: email,
      password: password
    },
    {observe: 'response'})
    .pipe(
      tap((res) =>{
        const authenticationToken = res.headers.get('bearer token') ?? '';
        //salvar token no local storage
      })
    );
  }
}
