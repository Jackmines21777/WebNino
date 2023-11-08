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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BarritaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
