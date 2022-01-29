import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  checkoutForm: FormGroup;

  user = {
    email: "",
    password: ""
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit(): void {
  }

  get validateEmail(){
    return this.checkoutForm.get("email");
  }

  get validatePassword(){
  return this.checkoutForm.get("password");
  }
  
  login() {
    const user = this.checkoutForm.value;

    this.loginService.login(user).subscribe({
      next: data => this.loginService.setLoggedUser(data),
      error: ({ error }) => alert(error.error),
      complete: () => this.router.navigate(["feed"])
    });
  }

}
