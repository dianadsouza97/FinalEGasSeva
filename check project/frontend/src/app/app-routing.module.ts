import { TransferComponent } from './customer/transfer/transfer.component';
import { CartComponent } from './customer/cart/cart.component';
import { ProductListComponent } from './customer/product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { StepperErrorsExampleComponent } from './stepper-errors-example/stepper-errors-example.component';
import { QueryFromComponent } from './customer/query-from/query-from.component';
import { OnlineBookingComponent } from './customer/online-booking/online-booking.component';
import { NewConnectionComponent } from './customer/new-connection/new-connection.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

import { CustomerComponent } from './customer/customer/customer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageServicesComponent } from './home-page-services/home-page-services.component';
import { HomePageSignupComponent } from './home-page-signup/home-page-signup.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [

  { path: 'admin', component: AdminComponent, canActivate: [AuthGaurdService] },
  {
    path: 'customer', component: CustomerComponent,
    children: [
      { path: 'transferConnection', component: TransferComponent },
      { path: 'gasBooking', component: OnlineBookingComponent },
      
      { path: 'accessories', component: ProductListComponent},
      { path: 'cart', component: CartComponent}
    ]
  },
  // {path: 'customer', component: CustomerComponent, canActivate: [AuthGaurdService]},
 
  { path: 'query', component: QueryFromComponent },
  { path: 'registrationStepper', component: StepperErrorsExampleComponent },
  { path: '', component: HomePageComponent },
  { path: 'home-page-header', component: HeaderComponent },
  { path: 'Home', component: HomePageComponent },
  { path: 'Services', component: HomePageServicesComponent },
  { path: 'SignUp', component: HomePageSignupComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
