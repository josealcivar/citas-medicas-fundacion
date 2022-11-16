import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasMedicasComponent } from './pages/citas-medicas/citas-medicas.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { HomeComponent } from './pages/home/home.component';
import { NopagesfoundComponent } from './pages/nopagesfound/nopagesfound.component';


import { MaterialModule } from '../material.module';
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { CardPacientesComponent } from './components/card-pacientes/card-pacientes.component';



@NgModule({
  declarations: [
    CitasMedicasComponent,
    HomeComponent,
    DataTableComponent,
    
    NopagesfoundComponent,
         CardPacientesComponent
  ],
  exports:[

 
   
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
    
  ]
})
export class ConsultaModule { }
