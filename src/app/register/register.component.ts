import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  baseURL=this.regis.baseurl;

mobileRegex=/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
emailRegex: RegExp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  registerForm=new FormGroup({
    employeename: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(1)]),
    employeemail:new FormControl('',[Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]),
    employeepassword:new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(32)]), 
    mobile:new FormControl('',[Validators.required,Validators.pattern(this.mobileRegex)])
  });
  constructor(private http:HttpClient,private router:Router,private regis:CommonService){}

  getControl(name:any) :AbstractControl | null
  {
    return this.registerForm.get(name);
  }
  registerNow()
  {

    if (
      this.registerForm.value.employeename === "" ||
      this.registerForm.value.employeemail === "" ||
      this.registerForm.value.employeepassword === "" ||
      this.registerForm.value.mobile === ""
    ) {
      alert("Forms fields cannot be empty!");
      return;
    }

    console.log(this.registerForm.value)
    this.http.post(this.baseURL+"api/v1/employee/save",this.registerForm.value,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully");
        this.regis.register=1;
        this.regis.login=1;
        this.router.navigate(['/']);


    });
  }
  }
  