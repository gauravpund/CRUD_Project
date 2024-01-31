import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  EmployeeArray:any[]=[];
  

emailRegex: RegExp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  
  constructor(private http:HttpClient,private router:Router,private com:CommonService)
  {}

  loginForm=new FormGroup({
    user_email:new FormControl("",[Validators.required,Validators.pattern(this.emailRegex)]),
    user_password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(32)])
  });

  getControl(name:any) :AbstractControl | null
  {
    return this.loginForm.get(name);
  }

  loginNow() {
    if (
      this.loginForm.value.user_email === "" ||
      this.loginForm.value.user_password === ""
    ) {
      alert("Form fields cannot be empty!");
      return;
    }
  
    const url = `http://localhost:8084/api/v1/employee/login/${this.loginForm.value.user_email}/${this.loginForm.value.user_password}`;
  
    this.http.get(url).subscribe(
      (res: any) => {
        console.log("Login response checking:", res);
        this.EmployeeArray=res;
        if(res==null)
        {
          alert("Login failed");
          console.log("Response status=",res.status);
        }
         else {
          alert("Login successfuly");
          console.log("Response status=",res.status);
          this.router.navigate(['/']);
          this.com.login=1;

        }
      },
      (error) => {
        console.error("Login error:", error);
        alert("Login failed");
      }
    );
  }
}
