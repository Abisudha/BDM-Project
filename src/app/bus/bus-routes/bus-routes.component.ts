import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bus-routes',
  templateUrl: './bus-routes.component.html',
  styleUrls: ['./bus-routes.component.scss']
})
export class BusRoutesComponent {

  constructor(private httpClient : HttpClient, private router : Router){}
drivername: any;
conductorname: any;
routeno: any;
from: any;
destination: any;
typeofBus: any;

clear(){

  this.drivername="";
  this.conductorname="";
  this.routeno="";
  this.from="";
  this.destination="";
  this.typeofBus="";
}
validate(){
  if(this.drivername!="" && this.conductorname!="" && this.routeno!="" && this.from!=""&& this.destination!="" &&
  this.typeofBus!=""){
   
    return true;
  }
  else{
    alert('All field must be entered');
    return false;

  }

}

allocate(){
  if(this.validate()){

  let busroutes={
    drivername:this.drivername,
    conductorname:this.conductorname,
    routeno:this.routeno,
    from:this.from,
    destination:this.destination,
    typeofBus:this.typeofBus


  }
  this.httpClient.post("https://retoolapi.dev/1lyfLv/busroute",busroutes).subscribe(
        () => {
          alert("Bus route allocated");
          setTimeout(()=>{
            this.router.navigate(['']);
          }, 3000);
        },
        error => {
          alert("error");
        }
      );

}
}
  

}
