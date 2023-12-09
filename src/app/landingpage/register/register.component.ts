import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private httpClient : HttpClient,private router:Router){}

empid: any;
username: any;
mobnum: any;
createpass: any;
 
reset(){
  this.empid='';
  this.username='';
  this.mobnum='';
  this.createpass='';
  

}
validate(){
  if(this.empid!='' && this.username!=''&& this.mobnum!='' && this.createpass!='' ){
    return true;
  }
  else{

    alert('All fields must be entered');
  }
  return false;
}
getsignup() {

  if(this.validate()){
    let user={
      empid:this.empid,
      username:this.username,
      mobnum:this.mobnum,
      createpass:this.createpass


    }
    this.httpClient.post("https://retoolapi.dev/X78egT/BDM-signup",user).subscribe(
        () => {
          alert("Registered Successfully... Please Login to continue....");
          setTimeout(()=>{
          this.router.navigate(['/login']);
          }, 3000);
        },
        error => {
          alert("Encounterd a problem. Unable to create a user at this moment... Mannichooo... Plz try try again.");
        }
      );



  }
  
}

}
