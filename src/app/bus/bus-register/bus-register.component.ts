import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-register',
  templateUrl: './bus-register.component.html',
  styleUrls: ['./bus-register.component.scss']
})
export class BusRegisterComponent {

  constructor(private httpClient : HttpClient, private router : Router){}

  vehicleno:any;
  vehicletype:any;
  chasisno:any;
  engineno:any;
  insurancedate:any;
  quartlytax:any;
  routenumber:any;



  cleardata(){

    this.vehicleno='';
    this.vehicletype="";
    this.chasisno="";
    this.engineno="";
    this.insurancedate="";
    this.quartlytax="";
    this.routenumber="";
  }

  validate(){
    if(this.vehicleno!="" && this.vehicletype!="" && this.chasisno!="" && this.engineno!="" && this.insurancedate!=""&&
    this.quartlytax!="" && this.routenumber!="" ){
      return true;
    }
    else{

      alert("All field must be filled");
      return false;
    }

  }

  register(){

    if(this.validate()){

    let busregister={

      vehicleno:this.vehicleno,
      vehicletype:this.vehicletype,
      chasisno:this.chasisno,
      engineno:this.engineno,
      insurancedate:this.insurancedate,
      quartlytax:this.quartlytax,
      routenumber:this.routenumber

    }

    this.httpClient.post("https://retoolapi.dev/AR9bUr/BusRegister",busregister).subscribe(
        () => {
          alert("Register successfully");
          setTimeout(()=>{
            this.router.navigate(['']);
          }, 3000);
        },
        error => {
          alert("please try agaain");
        }
      );

  }

  }



}
