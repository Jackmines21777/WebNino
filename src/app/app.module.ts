import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SliderComponent } from './slider/slider.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { TituloComponent } from './titulo/titulo.component';
import { BotonesComponent } from './botones/botones.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { BarritaComponent } from './barrita/barrita.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { CartasComponent } from './cartas/cartas.component';
import { CuboComponent } from './cubo/cubo.component';
import { LiquidoComponent } from './liquido/liquido.component';
import { FotomanchaComponent } from './fotomancha/fotomancha.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NivelFacilComponent } from './nivel-facil/nivel-facil.component';
import { NivelMedioComponent } from './nivel-medio/nivel-medio.component';
import { NivelDificilComponent } from './nivel-dificil/nivel-dificil.component';
import { SumaComponent } from './suma/suma.component';
import { NAleatorioComponent } from './n-aleatorio/n-aleatorio.component';
import { NivelFinalComponent } from './nivel-final/nivel-final.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './_material/material/material.module';
import { RestaComponent } from './resta/resta.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';
import { MensajeRestaComponent } from './mensajes/mensaje-resta/mensaje-resta.component';
import { MensajeSumaComponent } from './mensajes/mensaje-suma/mensaje-suma.component';
import { MensajeMultiplicacionComponent } from './mensajes/mensaje-multiplicacion/mensaje-multiplicacion.component';
import { MensajeDivisionComponent } from './mensajes/mensaje-division/mensaje-division.component';
import { MensajePadreComponent } from './mensajes/mensaje-padre/mensaje-padre.component';
import { MensajeHijoComponent } from './mensajes/mensaje-hijo/mensaje-hijo.component';
import { MensajeMemoriaComponent } from './mensajes/mensaje-memoria/mensaje-memoria.component';
import { SkeletonComponent } from './shared/components/skeleton/skeleton.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { AudioConfigComponent } from './audio-config/audio-config.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SliderComponent,
    GaleriaComponent,
    TituloComponent,
    BotonesComponent,
    MemoriaComponent,
    PerfilesComponent,
    CartasComponent,
    CuboComponent,
    LiquidoComponent,
    FotomanchaComponent,
    RegisterLoginComponent,
    HomeComponent,
    LayoutComponent,
    NivelFacilComponent,
    NivelMedioComponent,
    NivelDificilComponent,
    SumaComponent,
    NAleatorioComponent,
    NivelFinalComponent,
    RestaComponent,
    MultiplicacionComponent,
    DivisionComponent,
    MensajeRestaComponent,
    MensajeSumaComponent,
    MensajeMultiplicacionComponent,
    MensajeDivisionComponent,
    MensajePadreComponent,
    MensajeHijoComponent,
    MensajeMemoriaComponent,
    ConfiguracionComponent,
    AudioConfigComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarritaComponent,
    BrowserAnimationsModule,
    MaterialModule,
    SkeletonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
