import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './landingpage/welcome/welcome.component';
import { HeaderComponent } from './landingpage/header/header.component';
import { FooterComponent } from './landingpage/footer/footer.component';
import { RegisterComponent } from './landingpage/register/register.component';
import { LoginComponent } from './landingpage/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BusRegisterComponent } from './bus/bus-register/bus-register.component';
import { BusRoutesComponent } from './bus/bus-routes/bus-routes.component';
import { DriverRegisterComponent } from './Driver/driver-register/driver-register.component';
import { DriverLoginComponent } from './Driver/driver-login/driver-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    BusRegisterComponent,
    BusRoutesComponent,
    DriverRegisterComponent,
    DriverLoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,MatButtonModule,MatIconModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

