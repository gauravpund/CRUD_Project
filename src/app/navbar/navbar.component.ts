import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private ss:CommonService){

    
  }

  dlogin=this.ss.login;
  dregister=this.ss.register;

  logoutPage()
  {
    this.ss.login=0;
    this.ss.register=0;
    this.dlogin=0;
    this.dregister=0;
  }

}
