import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-updateemp',
  templateUrl: './updateemp.component.html',
  styleUrls: ['./updateemp.component.css']
})
export class UpdateempComponent {

  EmployeeArray:any[]=[];

  employeename:string="";
  mobile:Number=0;
  employeemail:string="";
  employeepassword:string="";
  
  currentEmployeeID:string="";

  constructor(private http:HttpClient,private comm:CommonService)
  {

  }

  baseUrl=this.comm.baseurl;

  getEmpData(data:any)
  {
    this.currentEmployeeID=data.value;
      this.http.get("http://localhost:8084/api/v1/employee/getOneEmployee"+ "/"+ data.value,{responseType: 'json'}).subscribe((resultData: any)=>
      {
          console.log("Particular data is getting check:"+resultData);
          // this.EmployeeArray=resultData;
          this.EmployeeArray.push(resultData);
          this.setUpdate(this.EmployeeArray[0]);
          // alert("Employee Data got");
          
    });
  
  }


  setUpdate(data:any)
  {
     
    console.log("Printing array:"+data);
    console.log("Printing array type:"+Array.isArray(data));

    // console.log("Server Emp Name:"+data['employeename']);
    // console.log("server Emp mail:"+data.employeemail);


   this.employeename = data.employeename;
   this.employeemail = data.employeemail;
   this.mobile = data.mobile;
   this.employeepassword=data.employeepassword;
    this.currentEmployeeID = data.employeid;  

    console.log("Server Emp Name:"+data['employeename']);
  console.log("server Emp id:"+data.employeid);

  console.log("Emp Name:"+ this.employeename);
  console.log("Emp mail:"+this.employeemail);
  }

  UpdateRecords()
  {
    let bodyData = {
      "employeeid" : this.currentEmployeeID,
      "employeename" : this.employeename,
      "employeemail" : this.employeemail,
      "employeepassword":this.employeepassword,
      "mobile" : this.mobile
    };
    
    console.log("This from update function Emp id:"+ this.currentEmployeeID);

    this.http.put(+this.baseUrl+"api/v1/employee/update",bodyData,{responseType: 'json'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Updateddd")
        
        this.employeename = '';
        this.employeemail = '';
        this.employeepassword='';
        this.mobile  = 0;
    });
  }
}
