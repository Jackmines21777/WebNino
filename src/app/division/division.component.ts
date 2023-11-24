import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

  isLoaded: Boolean = false;

  factor : number = [2, 3, 4, 5][Math.floor(Math.random() * 4)]; // Selecciona aleatoriamente entre 2, 3, 4 o 5
  resultadoDivision = 0;


  N1 : number = 0;
  N2 : number = 0;



  ngOnInit(): void {
    
    let {N1, N2, divisionTotal } = this.divisionEntreMultiplos(this.factor);

    this.N1 = N1;
    this.N2 = N2;
    this.resultadoDivision = divisionTotal;
    this.isLoaded = true;

  }

  divisionEntreMultiplos(factor : number) {
    // Genera dos números que sean múltiplos entre sí
    const [N1, N2] = this.generarMultiplosAleatorios(factor);//* destructuracion

    // Realiza la división
    const divisionTotal = N2 / N1;

    console.log("Resultado de La division es: " + divisionTotal);
    // this.mostrarNumeroEnHTML("resultadoDivision", divisionTotal); // Pasa restaTotal como argumento


    // Devuelve el resultado
    return { N1, N2, divisionTotal };
  }



  generarMultiplosAleatorios(factor: number) : [number, number] {
    // Genera un número aleatorio entre 1 y 10
    const N1 = Math.floor(Math.random() * 10) + 1;

    // Calcula el segundo número como múltiplo del primero
    const N2 = N1 * factor;

    // Devuelve ambos números
    return [N1, N2];
  }

}


