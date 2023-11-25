import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SnackbackActionComponent } from '../shared/components/snackback-action/snackback-action.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-multiplicacion',
  templateUrl: './multiplicacion.component.html',
  styleUrls: ['./multiplicacion.component.css']
})

export class MultiplicacionComponent implements OnInit {
  

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router,
    private _snackBar: MatSnackBar, private _matDialogRef: MatDialogRef<MultiplicacionComponent>) { }

  isLoaded : boolean = false;

  PR1: number = 0
  PR2: number = 0
  PR3: number = 0
  PR4: number = 0

  N1: number = 0
  N2: number = 0


  resultadoMultiplicacion: number = 0
  numeroAleatorio: number = 0

  miArray: number[] = [];
  ngOnInit() {
    this.initpor();
  }

  initpor(){
    this.isLoaded = false; 
    // Genera y muestra el primer número aleatorio
    this.N1 = this.generarNumeroAleatorio(0, 6);
    // mostrarNumeroEnHTML("num1", N1);

    // Genera y muestra el segundo número aleatorio
    this.N2 = this.generarNumeroAleatorio(0, 6);
    // mostrarNumeroEnHTML("num2", N2);

    this.resultadoMultiplicacion = this.multiplicacion(this.N1, this.N2);


    for (let index = 0; index < 5; index++) {

      let v = this.generarNumeroAleatorioExcluyendo(0, 36, this.resultadoMultiplicacion);
      if(this.miArray.find( (e) => e == v)){
        index--;
      }else {
        this.miArray.push(v);
      }
      
    }

    this.miArray.push(this.resultadoMultiplicacion)

    // console.log(this.miArray)

    this.mezclarArray(this.miArray);
    // console.log(this.miArray)
    setTimeout(()=> {
      this.isLoaded = true;
    },1200)
  }

 

  // funcion para generar numero aleatorio
  generarNumeroAleatorio(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


  // funcion para generar numero aleatorio exluyendo
  generarNumeroAleatorioExcluyendo(min: number, max: number, numeroExcluido: number) {
    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (numeroAleatorio === numeroExcluido);

    return numeroAleatorio;
  }


  // MULTIPLICACION ++++++++++++++++++++++++++++++++++++++++++++++
  multiplicacion(n1: number, n2: number) {
    var multiplicacionTotal = n1 * n2;

    // this.mostrarNumeroEnHTML("resultadoSuma", sumaTotal); // Pasa sumaTotal como argumento 
    return multiplicacionTotal;
  }


  // FUNCION MEZCLAR ARRAY
  mezclarArray(array : number[] ) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  checkAnswer(selectedValue: number): void {

    console.log(selectedValue)
    if (this.resultadoMultiplicacion == selectedValue) {
      const response = this._snackBar.openFromComponent(SnackbackActionComponent)
      response.onAction().subscribe({
        next: () => this.reset()
      })
      response.afterDismissed().subscribe(a => {
        a.dismissedByAction ? '' : this._matDialogRef.close();
      })
    } else {
      this._snackBar.open("UY!! FALLASTE, VUELVE A INTENTARLO ", "c:")
    }
  }

  reset(){
    this.N1 = 0;
    this.N2 = 0   
    this.miArray = [];
    this.initpor();
  }
}