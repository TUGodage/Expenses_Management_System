import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { LoginComponent} from './login/login.component';
import { ReportComponent} from './report/report.component';
import { SignComponent} from './sign/sign.component';
import { AddComponent }from './add/add.component';
import{ ViewComponent}from './view/view.component';
import { from } from 'rxjs';



const routes: Routes = [ 
  {path : '',component : HomeComponent},
  {path : 'login',component : LoginComponent},
  {path : 'report',component : ReportComponent},
  {path : 'sign',component : SignComponent},
  {path : 'add',component : AddComponent},
  {path : 'view',component : ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }