import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './components/panel/panel.component';
import { BannerEditarComponent } from './components/banner-editar/banner-editar.component';
import { SocialEditarComponent } from './components/social-editar/social-editar.component';
import { EducacionEditarComponent } from './components/educacion-editar/educacion-editar.component';
import { LaboralEditarComponent } from './components/laboral-editar/laboral-editar.component';
import { HabilidadEditarComponent } from './components/habilidad-editar/habilidad-editar.component';
import { ProyectoEditarComponent } from './components/proyecto-editar/proyecto-editar.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel', component: PanelComponent}, 
  {path: 'panel', component:PanelComponent },
  { path: 'banner-editar/:id', component: BannerEditarComponent},
  { path: 'social-editar/:id', component: SocialEditarComponent},
  { path: 'educacion-editar/:id', component: EducacionEditarComponent},
  { path: 'laboral-editar/:id', component: LaboralEditarComponent},
  { path: 'habilidad-editar/:id', component: HabilidadEditarComponent},
  { path: 'proyecto-editar/:id', component: ProyectoEditarComponent},
  { path: '', redirectTo:'/inicio', pathMatch:'full'},
  { path: '**', component: ErrorComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
