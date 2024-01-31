import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-displayemp',
  templateUrl: './displayemp.component.html',
  styleUrls: ['./displayemp.component.css']
})
export class DisplayempComponent {
  EmployeeArray:any[]=[];

  employeename:string="";
  employeeaddress:string="";
  mobile:Number=0;

  // currentEmployeeID="";

  constructor(private http: HttpClient )
  {
    this.getAllEmployee();
 
  }



  generatePDF(): void {
    const pdf = new jsPDF();
  
    // Add a title to the PDF
    pdf.text('Employee List', 10, 10);
  
    // Define table columns and calculate column widths
    const columns = ['Employee ID', 'Name', 'Email', 'Password', 'Mobile']; // Adjust column names
    const columnWidths = [30, 40, 60, 40, 40]; // Adjust column widths
  
    // Set starting point for the table
    let y = 20;
  
    // Add table headers
    columns.forEach((column, index) => {
      pdf.text(column, 10 + columnWidths.slice(0, index).reduce((sum, width) => sum + width, 0), y);
    });
  
    // Set new line for data rows
    y += 10;
  
    // Iterate through data and add rows
    this.EmployeeArray.forEach((employee, index) => {
      columns.forEach((column, columnIndex) => {
        const value = (column === 'Employee ID') ? employee.employeeid : employee[column.toLowerCase()];
        console.log(`Row ${index}, Column ${columnIndex}: ${column} - ${value}`);
        pdf.text(String(value), 10 + columnWidths.slice(0, columnIndex).reduce((sum, width) => sum + width, 0), y);
      });
  
      // Move to the next line for the next row
      y += 10;
    });
  
    // Save the document
    pdf.save('employee-list.pdf');
  }
  


  getAllEmployee()
  {
    
    this.http.get("http://localhost:8084/api/v1/employee/getAllEmployee").subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.EmployeeArray = resultData;
    });
  }
 
  // register()
  // {
  
  //   let bodyData = {
  //     "employeename" : this.employeename,
  //     "employeeaddress" : this.employeeaddress,
  //     "mobile" : this.mobile
  //   };
 
  //   this.http.post("http://localhost:8084/api/v1/employee/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
  //   {
  //       console.log(resultData);
  //       alert("Employee Registered Successfully");
  //       this.getAllEmployee();
  //       // this.clear();
  //   });
  // }

}
