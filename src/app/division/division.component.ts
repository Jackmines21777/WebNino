import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbackActionComponent } from '../shared/components/snackback-action/snackback-action.component';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  isLoaded: Boolean = false;

  miArray: number[] = [1, 2, 3, 4, 5, 6];
  resultadoDivision = 0;


  N1: number = 0;
  N2: number = 0;

  constructor(
    private _snackBar: MatSnackBar, private _matDialogRef: MatDialogRef<DivisionComponent>) { }



  ngOnInit(): void {

    this.initDiv();

  }

  initDiv() {
    
    this.isLoaded = false;
    let { N1, N2, divisionTotal } = this.divisionEntreMultiplos(this.miArray[Math.floor(Math.random() * 6)]);
    console.log(this.miArray)
    this.N1 = N1;
    this.N2 = N2;
    this.resultadoDivision = divisionTotal;
    setTimeout(() => {
      this.isLoaded = true
    }, 1200)
  }

  divisionEntreMultiplos(factor: number) {
    // Genera dos números que sean múltiplos entre sí
    const [N1, N2] = this.generarMultiplosAleatorios(factor);//* destructuracion

    // Realiza la división
    const divisionTotal = N2 / N1;

    console.log("Resultado de La division es: " + divisionTotal);
    // this.mostrarNumeroEnHTML("resultadoDivision", divisionTotal); // Pasa restaTotal como argumento


    // Devuelve el resultado
    return { N1, N2, divisionTotal };
  }



  generarMultiplosAleatorios(factor: number): [number, number] {
    // Genera un número aleatorio entre 1 y 10
    const N1 = Math.floor(Math.random() * 10) + 1;

    // Calcula el segundo número como múltiplo del primero
    const N2 = N1 * factor;

    // Devuelve ambos números
    return [N1, N2];
  }




  checkAnswer(selectedValue: number): void {

    console.log(selectedValue)
    if (this.resultadoDivision == selectedValue) {
      // resultadoSuma.classList.add("correct");
      const response = this._snackBar.openFromComponent(SnackbackActionComponent)
      response.onAction().subscribe({
        next: () => this.reset()
      })
      response.afterDismissed().subscribe(a => {
        a.dismissedByAction ? '' : this._matDialogRef.close();
      })
    } else {
      this._snackBar.open("¡Incorrecto!, ¿Quieres seguir intentando?", "Sí")

      // resultadoSuma.classList.add("incorrect");
    }
  }


  reset() {
    this.N1 = 0;
    this.N2 = 0;
    this.initDiv();
  }
}

