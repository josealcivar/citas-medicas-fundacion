import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './consultas/pages/home/home.component';
import { CitasMedicasComponent } from './consultas/pages/citas-medicas/citas-medicas.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PagesMainComponent } from './consultas/pages/pages-main/pages-main.component';
import { NopagesfoundComponent } from './consultas/pages/nopagesfound/nopagesfound.component';

const routes: Routes = [
  {path:'', component: PagesMainComponent,
children:[
  {path:'dashboard', component: HomeComponent},
  {path:'citas', component: CitasMedicasComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
]},

{path:'login', component: LoginComponent},
{path:'register', component: RegisterComponent},

{path:'**', component: NopagesfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
