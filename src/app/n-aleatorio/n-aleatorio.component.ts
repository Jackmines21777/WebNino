import { Component } from '@angular/core';

@Component({
  selector: 'app-n-aleatorio',
  templateUrl: './n-aleatorio.component.html',
  styleUrls: ['./n-aleatorio.component.css']
})
export class NAleatorioComponent {

}

document.addEventListener("DOMContentLoaded", function () {
  // Función para generar un número aleatorio
  function generarNumeroAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Función para generar un número aleatorio excluyendo
  function generarNumeroAleatorioExcluyendo(
    min: number,
    max: number,
    numeroExcluido: number
  ): number {
    let numeroAleatorio;
    do {
      numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (numeroAleatorio === numeroExcluido);

    return numeroAleatorio;
  }

  // Función para mostrar el número en el HTML
  function mostrarNumeroEnHTML(id: string, numero: number): void {
    const resultadoElement = document.getElementById(id);
    if (resultadoElement) {
      resultadoElement.innerHTML = numero.toString();
    }
  }

  // Función para sumar dos números y mostrar el resultado en el HTML y la consola
  function suma(N1: number, N2: number): number {
    const sumaTotal = N1 + N2;

    console.log(`Resultado de la suma es: ${sumaTotal}`);
    mostrarNumeroEnHTML("resultadoSuma", sumaTotal);
    return sumaTotal;
  }

  
   // Generar números aleatorios y mostrarlos en el HTML
   const N1 = generarNumeroAleatorio(1, 10);
   const N2 = generarNumeroAleatorio(1, 10);
 
   mostrarNumeroEnHTML("num1", N1);
   mostrarNumeroEnHTML("num2", N2);
 
   // Calcular y mostrar la suma de los números
   const resultadoSuma = suma(N1, N2);
 
   // Mostrar números en la consola
   console.log("Primer número: ", N1);
   console.log("Segundo número: ", N2);
 
   // Generar números aleatorios excluyendo el resultado de la suma
   const PR1 = generarNumeroAleatorio(1, 20 + resultadoSuma);
   const PR2 = generarNumeroAleatorio(1, 20 + resultadoSuma);
   const PR3 = generarNumeroAleatorio(1, 20 + resultadoSuma);
   const PR4 = generarNumeroAleatorio(1, 20 + resultadoSuma);
 
   console.log("PR1 no debe salir: ", PR1);
   console.log("PR2 no debe salir: ", PR2);
   console.log("PR3 no debe salir: ", PR3);
   console.log("PR4 no debe salir: ", PR4);
 
   // Mostrar números en el HTML
   mostrarNumeroEnHTML("PR1", PR1);
   mostrarNumeroEnHTML("PR2", PR2);
   mostrarNumeroEnHTML("PR3", PR3);
   mostrarNumeroEnHTML("PR4", PR4);
 
   // Generar un número aleatorio excluyendo el resultado de la suma
   const numeroAleatorio = generarNumeroAleatorio(1, 20 + resultadoSuma);
   console.log("excluido: ", numeroAleatorio);

  // Crear un array con los números generados
  const miArray = [PR1, PR2, PR3, PR4];

  // Mostrar el array en la consola
  console.log("Array original: ", miArray);

  // Función para mezclar un array
  function mezclarArray(array: number[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  // Mezclar el array original
  mezclarArray(miArray);

  // Mostrar el array mezclado en la consola
  console.log("Array mezclado: ", miArray);

  // Obtener el elemento en el que se mostrarán los números
  const numerosDiv = document.getElementById("numeros");

  // Limpiar el contenido del elemento
  if (numerosDiv) {
    numerosDiv.innerHTML = "";
  }

  // Mostrar los números mezclados en el HTML
  miArray.forEach((numero) => {
    const numeroElement = document.createElement("div");
    numeroElement.textContent = numero.toString();
    numeroElement.classList.add("card"); // Clase CSS para dar estilo a los números
    if (numerosDiv) {
      numerosDiv.appendChild(numeroElement);
    }
  });

 });




