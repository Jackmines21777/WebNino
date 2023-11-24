import { Router } from '@angular/router';
import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SnackbackActionComponent } from '../shared/components/snackback-action/snackback-action.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resta',
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.css']
})
export class RestaComponent implements OnInit {


  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router,
    private _snackBar: MatSnackBar, private _matDialogRef: MatDialogRef<RestaComponent>) { }


  signinBtn: HTMLElement | null = this.el.nativeElement.querySelector('.signinBtn');
  signupBtn: HTMLElement | null = this.el.nativeElement.querySelector('.signupBtn');

  @ViewChild('der')
  der!: ElementRef<HTMLDivElement>
  // body!: Element<HTMLDivElement>


  isLoaded: boolean = false;

  PR1: number = 0
  PR2: number = 0
  PR3: number = 0
  PR4: number = 0

  N1: number = 0
  N2: number = 0


  resultadoResta: number = 0
  numeroAleatorio: number = 0

  miArray: number[] = [];
  ngOnInit() {

    this.initResta();


  }

  initResta() {
    this.isLoaded = false; 
    // Genera y muestra el primer número aleatorio
    this.N1 = this.generarNumeroAleatorio(5, 12);
    // mostrarNumeroEnHTML("num1", N1);

    // Genera y muestra el segundo número aleatorio
    this.N2 = this.generarNumeroAleatorio(0, 5);
    // mostrarNumeroEnHTML("num2", N2);


    this.resultadoResta = this.resta(this.N1, this.N2);




    // this.PR1 = this.generarNumeroAleatorio(1, 10);
    // this.PR2 = this.generarNumeroAleatorio(1, 10);
    // this.PR3 = this.generarNumeroAleatorio(1, 10);
    // this.PR4 = this.generarNumeroAleatorio(1, 10);

    for (let index = 0; index < 5; index++) {

      let v = this.generarNumeroAleatorioExcluyendo(1, 20, this.resultadoResta);
      if (this.miArray.find((e) => e == v)) {
        index--;
      } else {
        this.miArray.push(v);
      }

      setTimeout(()=> {
        this.isLoaded = true;
      },1200)
      
    }

    this.miArray.push(this.resultadoResta)

    console.log(this.miArray)

    this.mezclarArray(this.miArray);
    console.log(this.miArray)
  }


  iniciarSession() {
    this.der.nativeElement.classList.remove('slide');
  }
  registrarSession() {
    this.der.nativeElement.classList.add('slide');
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


  // RESTA ++++++++++++++++++++++++++++++++++++++++++++++
  resta(n1: number, n2: number) {
    var restaTotal = n1 - n2;

    // this.mostrarNumeroEnHTML("resultadoSuma", sumaTotal); // Pasa sumaTotal como argumento 
    return restaTotal;
  }


  // FUNCION MEZCLAR ARRAY
  mezclarArray(array: number[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }


  checkAnswer(selectedValue: number): void {

    console.log(selectedValue)
    if (this.resultadoResta == selectedValue) {
      // resultadoSuma.classList.add("correct");
      alert("repuesta correcta")
    } else {
      alert("repuesta incorrecta")
      // resultadoSuma.classList.add("incorrect");
    }

    console.log(selectedValue)
    if (this.resultadoResta == selectedValue) {
      // resultadoSuma.classList.add("correct");
      const response = this._snackBar.openFromComponent(SnackbackActionComponent)
      response.onAction().subscribe({
        next: () => this.reset()
      })
      response.afterDismissed().subscribe(a => {
        a.dismissedByAction ? '' : this._matDialogRef.close();
      })
    } else {
      this._snackBar.open("UY!! FALLASTE, VUELVE A INTENTARLO ", "c:")

      // resultadoSuma.classList.add("incorrect");
    }
  }


  reset() {
    this.N1 = 0;
    this.N2 = 0
    this.miArray = [];
    this.initResta();
  }
}