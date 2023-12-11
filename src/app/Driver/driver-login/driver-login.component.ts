import { Component } from '@angular/core';
import { ApiUrls } from 'src/app/common/apiurls';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-driver-login',
  templateUrl: './driver-login.component.html',
  styleUrls: ['./driver-login.component.scss']
})
export class DriverLoginComponent {
  empid: any;
  password: any;

  constructor(private apiService: ApiService, private router: Router) { }

  clear() {
    this.empid = "";
    this.password = "";
  }

  validateLogin() {
    if (this.empid != '' && this.password != '') {
      let appliedFilters = [];
      appliedFilters.push("empid=" + this.empid);
      appliedFilters.push("password=" + this.password);
      this.apiService.getApiDataByfilter(ApiUrls.driverregisterapi, appliedFilters).subscribe(
        (data: any) => {
          console.log(data);
          if (data.length > 0 && data[0].empid == this.empid && data[0].password == this.password){
            // sessionStorage.setItem('userMobile', data[0].mobile);
            this.router.navigate(['/login']);
            this.clear();
          }else{
            alert("Give correct credentials");
          }
        },
        error => { }
      );
    } else {
      alert("something missing");
    }
  }

}
