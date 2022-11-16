import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesMainComponent } from './pages-main/pages-main.component';
import { HomeComponent } from './home/home.component';
import { CitasMedicasComponent } from './citas-medicas/citas-medicas.component';


const routes: Routes = [
    {path:'', component: PagesMainComponent,
    children:[
      {path:'dashboard', component: HomeComponent},
      {path:'citas', component: CitasMedicasComponent},
      {path:'', redirectTo:'/dashboard', pathMatch:'full'},
    ]},
    
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }