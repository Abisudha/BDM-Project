import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-register',
  templateUrl: './driver-register.component.html',
  styleUrls: ['./driver-register.component.scss']
})
export class DriverRegisterComponent {


  constructor(private httpClient : HttpClient, private router : Router){}

drivername: any;
empid: any;
licenseno: any;
age: any;
depo: any;
password:any;


clear(){

  this.drivername="";
  this.empid="";
  this.licenseno="";
  this.age="";
  this.depo="";
  this.password="";

}

validate(){
  if(this.drivername!="" && this.empid!="" && this.licenseno!="" && this.age!="" && this.depo!="" && this.password!=""){
    return true;
  }
  else{
    alert("all fields must be entered");
    return false;
  }

}
register(){

  if(this.validate()){


    let driverregister={
      drivername:this.drivername,
      empid:this.empid,
      licenseno:this.licenseno,
      age:this.age,
      depo:this.depo,
      password:this.password
    }

    this.httpClient.post("https://retoolapi.dev/GgmiFi/driverregister",driverregister).subscribe(
        () => {
          alert("Register successfully...");
          setTimeout(()=>{
            this.router.navigate(['']);
          }, 3000);
        },
        error => {
          alert("unable to connect");
        }
      );
  }
}

}
