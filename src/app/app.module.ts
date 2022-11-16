import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ConsultaModule } from './consultas/consulta.module';



import { PagesMainComponent } from './consultas/pages/pages-main/pages-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
@NgModule({

  declarations: [
    AppComponent,
  
    PagesMainComponent,
    
  ],
  imports: [
    AppRoutingModule,
    ConsultaModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    AuthModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
