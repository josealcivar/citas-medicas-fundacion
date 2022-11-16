import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//modulos
import { PagesRoutingModule } from './consultas/pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagesfoundComponent } from './consultas/pages/nopagesfound/nopagesfound.component';



const routes: Routes = [

// pasth : / dashboard PagesRouting
// pasth : / auth AuthRouting
// pasth : / PagesRouting

{path:'**', component: NopagesfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  PagesRoutingModule,
  AuthRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
