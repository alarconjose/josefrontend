import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/banner/banner.component';
import { BannerEditarComponent } from './components/banner-editar/banner-editar.component';
import { ErrorComponent } from './components/error/error.component';
import { PanelComponent } from './components/panel/panel.component';
import { LaboralComponent } from './components/laboral/laboral.component';
import { LaboralAgregarComponent } from './components/laboral-agregar/laboral-agregar.component';
import { LaboralEditarComponent } from './components/laboral-editar/laboral-editar.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { EducacionAgregarComponent } from './components/educacion-agregar/educacion-agregar.component';
import { EducacionEditarComponent } from './components/educacion-editar/educacion-editar.component';
import { HabilidadComponent } from './components/habilidad/habilidad.component';
import { HabilidadAgregarComponent } from './components/habilidad-agregar/habilidad-agregar.component';
import { HabilidadEditarComponent } from './components/habilidad-editar/habilidad-editar.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ProyectoAgregarComponent } from './components/proyecto-agregar/proyecto-agregar.component';
import { ProyectoEditarComponent } from './components/proyecto-editar/proyecto-editar.component';
import { SocialComponent } from './components/social/social.component';
import { SocialAgregarComponent } from './components/social-agregar/social-agregar.component';
import { SocialEditarComponent } from './components/social-editar/social-editar.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    BannerEditarComponent,
    ErrorComponent,
    PanelComponent,
    LaboralComponent,
    LaboralAgregarComponent,
    LaboralEditarComponent,
    EducacionComponent,
    EducacionAgregarComponent,
    EducacionEditarComponent,
    HabilidadComponent,
    HabilidadAgregarComponent,
    HabilidadEditarComponent,
    ProyectoComponent,
    ProyectoAgregarComponent,
    ProyectoEditarComponent,
    SocialComponent,
    SocialAgregarComponent,
    SocialEditarComponent,
    NavegadorComponent,
    LoginComponent,
    FooterComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
