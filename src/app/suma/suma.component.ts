import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SnackbackActionComponent } from '../shared/components/snackback-action/snackback-action.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {
  

  constructor(private el: ElementRef, private renderer: Renderer2, private router: Router,
    private _snackBar : MatSnackBar, private _matDialogRef : MatDialogRef<SumaComponent>) { }

  
  signinBtn: HTMLElement | null = this.el.nativeElement.querySelector('.signinBtn');
  signupBtn: HTMLElement | null = this.el.nativeElement.querySelector('.signupBtn');

  @ViewChild('der')
  der!: ElementRef<HTMLDivElement>
  // body!: Element<HTMLDivElement>


  isLoaded : boolean = false;

  N1: number = 0
  N2: number = 0


  resultadoSuma: number = 0
  numeroAleatorio: number = 0

  miArray: number[] = [];
  ngOnInit() {
    this.initSuma();
  }

  initSuma(){
    this.isLoaded = false; 
    // Genera y muestra el primer número aleatorio
    this.N1 = this.generarNumeroAleatorio(1, 5);
    // mostrarNumeroEnHTML("num1", N1);

    // Genera y muestra el segundo número aleatorio
    this.N2 = this.generarNumeroAleatorio(1, 5);
    // mostrarNumeroEnHTML("num2", N2);

    this.resultadoSuma = this.suma(this.N1, this.N2);

    for (let index = 0; index < 5; index++) {

      let v = this.generarNumeroAleatorioExcluyendo(1, 20, this.resultadoSuma);
      if(this.miArray.find( (e) => e == v)){
        index--;
      }else {
        this.miArray.push(v);
      }
      
    }

    this.miArray.push(this.resultadoSuma)

    // console.log(this.miArray)

    this.mezclarArray(this.miArray);
    // console.log(this.miArray)
    setTimeout(()=> {
      this.isLoaded = true;
    },1200)
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


  // SUMA ++++++++++++++++++++++++++++++++++++++++++++++
  suma(n1: number, n2: number) {
    var sumaTotal = n1 + n2;

    console.log("Resultado de la suma es: " + sumaTotal);
    // this.mostrarNumeroEnHTML("resultadoSuma", sumaTotal); // Pasa sumaTotal como argumento 
    return sumaTotal;
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
    if (this.resultadoSuma == selectedValue) {
      // resultadoSuma.classList.add("correct");
       const response =  this._snackBar.openFromComponent(SnackbackActionComponent)
      response.onAction().subscribe( {
        next : () => this.reset()
      })
      response.afterDismissed().subscribe( a => {
        a.dismissedByAction ? '': this._matDialogRef.close(); 
      })
    } else {
      this._snackBar.open("UY!! FALLASTE, VUELVE A INTENTARLO ","c:")
      
      // resultadoSuma.classList.add("incorrect");
    }
  }


  reset(){
    this.N1 = 0;
    this.N2 = 0   
    this.miArray = [];
    this.initSuma();
  }

}