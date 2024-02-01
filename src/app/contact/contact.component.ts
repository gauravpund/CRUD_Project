import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private http:HttpClient,private router:Router,private comm:CommonService)
  {}

  baseUrl=this.comm.baseurl;

  emailRegex: RegExp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;


  contactForm=new FormGroup({
    name: new FormControl('',[Validators.required,Validators.maxLength(32),Validators.minLength(1)]),
    email:new FormControl('',[Validators.required,Validators.maxLength(32),Validators.pattern(this.emailRegex)]),
    message:new FormControl('',[Validators.required,Validators.maxLength(250),Validators.minLength(50)])
  })

  saveNow()
  {
    if (
      this.contactForm.value.name === "" ||
      this.contactForm.value.email === "" ||
      this.contactForm.value.message === ""
    ) {
      alert("Forms fields cannot be empty!");
      return;
    }

    console.log("Form data:"+this.contactForm.value)
    this.http.post(this.baseUrl+"api/v1/employee/contact",this.contactForm.value,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log("API response data:"+resultData);
        alert("Form submited Successfully");

        this.formClear();
        this.router.navigate(['/']);


    });
  }
  
  formClear()
  {
    this.contactForm.value.name =""
      this.contactForm.value.email =""
      this.contactForm.value.message =""
  }

  getControl(name:any) :AbstractControl | null
  {
    return this.contactForm.get(name);
  }
}
