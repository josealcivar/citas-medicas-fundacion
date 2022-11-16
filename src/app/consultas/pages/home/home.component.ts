import { Component, OnInit, OnChanges } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import 'moment/locale/fr';
// import 'moment/locale/fr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  fechaConsulta='';
  medicoEspecialista: boolean=false;
  pacientes: boolean=false;
  busquedaNombres='';

  ngOnInit(): void {
  }


  Busqueda(){
    console.log(this.fechaConsulta);
    console.log(this.medicoEspecialista);
    console.log(this.pacientes);
    console.log(this.busquedaNombres);
  }


  tipoBusqueda(){
    if(this.medicoEspecialista==true){
      this.pacientes=false;
    }
  }

  tipoBusquedaPacientes(){
    if (this.pacientes=true){
      this.medicoEspecialista=false;
    }
  }

}
