import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../authentication/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    // private authenticationService: AuthenticationService,
    private router: Router
    ){}
  
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
          Validators.required,
          Validators.email
      ])],
      password: ['',Validators.compose([
          Validators.required
      ])]
    });
  }

  login(){
    console.log("Logando");
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.router.navigate(['schedule']);
  }
}
