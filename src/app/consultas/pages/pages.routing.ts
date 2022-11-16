import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesMainComponent } from './pages-main/pages-main.component';
import { HomeComponent } from './home/home.component';
import { CitasMedicasComponent } from './citas-medicas/citas-medicas.component';


const routes: Routes = [
    
    {
        path:'dashboard', component: PagesMainComponent,
    
      children:[
        {path:'', component: HomeComponent},
        {path:'citas', component: CitasMedicasComponent},
        
    ]},
    
    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class PagesRoutingModule { }