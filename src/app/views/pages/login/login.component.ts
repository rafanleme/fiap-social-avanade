import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login() {
    const user = {
      email: "rafanleme@gmail.com",
      password: "123456"
    }

    this.loginService.login(user).subscribe(data => {
      console.log(data);
    });
  }

}
