import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { EmpLeavesComponent } from './emp-leaves/emp-leaves.component';
import { AdminLeavesComponent } from './admin-leaves/admin-leaves.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    redirectTo: '',
    pathMatch: "full"
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "admindashboard",
    component: AdminDashboardComponent,
    children:[
      {
        path:"adminleaves",
        component:AdminLeavesComponent,
      }
    ]
  },
  {
    path: "empdashboard",
    component: EmpDashboardComponent,
    children: [
      {
        path: 'empleaves',
        component: EmpLeavesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
