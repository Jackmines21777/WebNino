import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PerfilesComponent } from './perfiles/perfiles.component';
import { LoginComponent } from './login/login.component';
import { RegisterLoginComponent } from './register-login/register-login.component';
import { LayoutComponent } from './layout/layout/layout.component';
import { NivelFacilComponent } from './nivel-facil/nivel-facil.component';
import { NivelMedioComponent } from './nivel-medio/nivel-medio.component';
import { NivelDificilComponent } from './nivel-dificil/nivel-dificil.component';
import { SumaComponent } from './suma/suma.component';
import { NivelFinalComponent } from './nivel-final/nivel-final.component';

const routes: Routes = [
 
  {
    path: "login",
    component: RegisterLoginComponent
  },
  {
    path: "layout",
    component: LayoutComponent,
    children: [
      {
        path: "inicio",
        component : HomeComponent
      },
      {
        path: "perfil",
        component: PerfilesComponent
      },
      {
        path: "registerLogin",
        component: RegisterLoginComponent
      },
      {
        path: "nivelFacil",
        component: NivelFacilComponent,
        children: [
          {
            path: "nivelSuma",
            component: SumaComponent
          },
        ]
      },
      {
        path: "nivelMedio",
        component: NivelMedioComponent
      },
      {
        path: "nivelDificil",
        component: NivelDificilComponent
      },
      {
        path: "nivelSuma",
        component: SumaComponent
      },
      {
        path: "nivelFinal",
        component: NivelFinalComponent
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: "full"
      }
    ]
  },

  {
    path: "",
    redirectTo : "layout",
    pathMatch: 'full'
  },
  {
    path: "**",
    redirectTo : "layout",
    pathMatch : 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
