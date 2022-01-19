import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UserLogin {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(userLogin: UserLogin) {
    return this.httpClient.post("https://fiap-social-api.herokuapp.com/sessions", userLogin);
  }
}
