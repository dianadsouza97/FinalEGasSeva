import { StepperErrorsExampleComponent } from './stepper-errors-example/stepper-errors-example.component';
import { QueryFromComponent } from './customer/query-from/query-from.component';
import { OnlineBookingComponent } from './customer/online-booking/online-booking.component';
import { NewConnectionComponent } from './customer/new-connection/new-connection.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { RegistrationComponent} from './registration/registration.component';
import { CustomerComponent } from './customer/customer/customer.component';
const routes: Routes = [
  { path: 'emp', component: EmployeeComponent,canActivate:[AuthGaurdService] },
  { path: 'addemployee', component: AddEmployeeComponent,canActivate:[AuthGaurdService]},
  { path: 'login', component: LoginComponent },
  { path: 'register',component: RegistrationComponent},
  { path: 'admin', component: AdminComponent,canActivate:[AuthGaurdService]},
  { path: 'customer', component: CustomerComponent,canActivate:[AuthGaurdService],
  children:[
  {path:'newconnection',component: NewConnectionComponent},
  {path:'gasBooking',component: OnlineBookingComponent},
  {path:'query',component: QueryFromComponent},
  {path:'registrationStepper',component: StepperErrorsExampleComponent}
]},
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
