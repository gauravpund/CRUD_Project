import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-deleteemp',
  templateUrl: './deleteemp.component.html',
  styleUrls: ['./deleteemp.component.css']
})
export class DeleteempComponent {

  // empid:;

  constructor(private http:HttpClient,private comm:CommonService)
  {

  }
  baseUrl=this.comm.baseurl;

  setDelete(data:any)
  {
console.log("check Employe id:"+data.value);
    this.http.delete(+this.baseUrl+"api/v1/employee/delete"+ "/"+ data.value,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Deletedddd");
        
  });
}
}
