import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; 

import { EmployeeComponent } from './employee/employee.component';
import { Employee } from './shared/employee.model';

const routes: Routes = [
  {path: 'employee' , component: EmployeeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
