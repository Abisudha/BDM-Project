import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './landingpage/login/login.component';
import { RegisterComponent } from './landingpage/register/register.component';
import { BusRegisterComponent } from './bus/bus-register/bus-register.component';
import { BusRoutesComponent } from './bus/bus-routes/bus-routes.component';
import { DriverLoginComponent } from './Driver/driver-login/driver-login.component';
import { DriverRegisterComponent } from './Driver/driver-register/driver-register.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'bus-register',component:BusRegisterComponent},
{path:'bus-routes',component:BusRoutesComponent},
{path:'driverlogin',component:DriverLoginComponent},
{path:'driverregister',component:DriverRegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
