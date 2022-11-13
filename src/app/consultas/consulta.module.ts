import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasMedicasComponent } from './pages/citas-medicas/citas-medicas.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';

import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';



@NgModule({
  declarations: [
    CitasMedicasComponent,
    HomeComponent,
    DataTableComponent,
    LoginComponent,
    RegisterComponent,
    NopagesfoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ConsultaModule { }