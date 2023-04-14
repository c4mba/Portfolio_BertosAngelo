import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SocialComponent } from './components/social/social.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HsskillsComponent } from './components/hsskills/hsskills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoAPComponent,
    FooterComponent,
    HomeComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HsskillsComponent,
    ProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgCircleProgressModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
