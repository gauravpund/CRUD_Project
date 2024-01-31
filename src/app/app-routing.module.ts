import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DisplayempComponent } from './displayemp/displayemp.component';
import { UpdateempComponent } from './updateemp/updateemp.component';
import { DeleteempComponent } from './deleteemp/deleteemp.component';
import { HelpusComponent } from './helpus/helpus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'display',
    component:DisplayempComponent
  },
  {
    path:'update',
    component:UpdateempComponent
  },
  {
    path:'delete',
    component:DeleteempComponent
  },
  {
    path:'helpus',
    component:HelpusComponent
  },
  {
    path:'aboutus',
    component:AboutusComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'portfolio',
    component:PortfolioComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
