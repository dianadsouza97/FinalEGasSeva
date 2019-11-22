import { ChatModule } from './chat/chat-dialog/chat.module';
import { DemoMaterialModule } from './material-module';
import { StepperErrorsExampleComponent } from './stepper-errors-example/stepper-errors-example.component';
import { UpdateFormComponent } from './customer/update-form/update-form.component';
import { QueryFromComponent } from './customer/query-from/query-from.component';
import { OnlineBookingComponent } from './customer/online-booking/online-booking.component';
import { NewConnectionComponent } from './customer/new-connection/new-connection.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { AdminComponent } from './admin/admin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerComponent } from './customer/customer/customer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import '../polyfills';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { HomePageComponent } from './home-page/home-page.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    AdminComponent,
    CustomerComponent,
    NewConnectionComponent,
    OnlineBookingComponent,
    QueryFromComponent,
    UpdateFormComponent,
    StepperErrorsExampleComponent,
    HomePageComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    NgbModule,
    AngularFontAwesomeModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    ChatModule,
    MDBBootstrapModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent,StepperErrorsExampleComponent],
  entryComponents: [RegistrationComponent]

})
export class AppModule { }
