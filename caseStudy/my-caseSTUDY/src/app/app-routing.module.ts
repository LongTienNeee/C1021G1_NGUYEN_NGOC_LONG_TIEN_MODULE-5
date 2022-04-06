import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ListEmployeeComponent} from './employee/list-employee/list-employee.component';
import {ListServiceComponent} from './service/list-service/list-service.component';


const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "customer", component:ListCustomerComponent},
  {path: "employee", component:ListEmployeeComponent},
  {path: "service", component:ListServiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
