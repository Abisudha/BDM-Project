import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiUrls } from 'src/app/common/apiurls';
import { ApiService } from 'src/app/services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  empid:string="";
  password:string="";
  

  constructor(private apiService: ApiService, private router: Router){}



  resetdata(){

    this.empid="";
    this.password="";
  }

  validateLogin(){
    if(this.empid != '' && this.password != ''){
      let appliedFilters = [];
      appliedFilters.push("empid=" + this.empid);
      appliedFilters.push("password=" + this.password);
      this.apiService.getApiDataByfilter(ApiUrls.registerApi, appliedFilters).subscribe(
        (data : any)=> {
          console.log(data);
          if(data.length > 0 && data[0].empid == this.empid && data[0].createpass == this.password){
            sessionStorage.setItem('empid', data[0].empid);
            this.router.navigate(['/bus-register']);
          }else{
            alert("Invalid Empid or password...");
          }
        },
        error => {}
      );
    }else{
      alert("Username or Password is missing...");
    }
  }

}
