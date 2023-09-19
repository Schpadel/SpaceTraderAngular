import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserOverviewComponent} from "./user-overview/user-overview.component";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  { path: 'user', component: UserOverviewComponent },
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
