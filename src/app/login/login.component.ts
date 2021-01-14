import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    // public auth: AuthService,
    private router: Router
  ) {
    this.login = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],

    });
  }

  ngOnInit() {
    // console.log(localStorage.getItem('userEmail'),this.login);

  }
  get f() { return this.login.controls; }
  // onSubmit() {
  //   if (this.login.invalid) {
  //     console.log("Invalid Inputs", this.login);
  //     return;
  //   } else {
  //     this.auth.login(this.login.value).subscribe((data: any) => {
  //       console.log('login Response', data.success);
  //       if (!data.success) {
  //         console.log("user not registered")
  //       } else {
  //         localStorage.setItem('token', data.token)
  //         localStorage.setItem('userEmail', data.email)
  //         localStorage.setItem('userPlan',data.userPlan)
  //         localStorage.setItem('createdAt',data.createdAt)
  //         this.router.navigate(['conversion']);
  //       }
  //     })
  //   }

  // }

}