import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {
  operaciones: any[] = [
    { operacion: "(9x9)+4", resultado: 85 },
    { operacion: "(10x8)+5", resultado: 85 },
    { operacion: "(100/5)+7", resultado: 27 },
    { operacion: "(9x2)+9", resultado: 27 },
    { operacion: "(100-89)x9", resultado: 99 },
    { operacion: "(56-47)x11", resultado: 99 },
    { operacion: "(10x10)+15", resultado: 115 },
    { operacion: "(30x4)-5", resultado: 115 },
    { operacion: "(10x6)+10", resultado: 70 },
    { operacion: "(100/5)+50", resultado: 70 },
    { operacion: "(9x8)+20", resultado: 92 },
    { operacion: "(12x4)-44", resultado: 92 },
    { operacion: "(5x9)+32", resultado: 77 },
    { operacion: "(3x16)+29", resultado: 77 },
    { operacion: "(12x12)-4", resultado: 140 },
    { operacion: "(500/5)+40", resultado:140 },

    // Agrega más operaciones según tus necesidades
  ];

  shuf_operaciones: any;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.initMemoria();
  }

  initMemoria() {
    this.shuf_operaciones = this.operaciones.sort(() => (Math.random() > 0.5) ? 2 : -1);

    for (let i: number = 0; i < this.operaciones.length; i++) {
      let box: HTMLDivElement = this.renderer.createElement('div');
      this.renderer.addClass(box, 'i');

      // Muestra la operación en el cuadro
      this.renderer.appendChild(box, this.renderer.createText(this.shuf_operaciones[i].operacion));

      // Asigna evento click
      box.addEventListener('click', () => {
        this.renderer.addClass(box, 'boxOpen');

        // Solo se ejecutará si hay 2 elementos con la clase `boxOpen`
        if (document.querySelectorAll('.boxOpen').length > 1 && document.querySelectorAll('.boxOpen').length <= 2) {
          const firstBox = document.querySelectorAll('.boxOpen')[0];
          const secondBox = document.querySelectorAll('.boxOpen')[1];

          if (this.checkMatch(firstBox, secondBox)) {
            firstBox.classList.add('boxMatch');
            secondBox.classList.add('boxMatch');

            firstBox.classList.remove('boxOpen');
            secondBox.classList.remove('boxOpen');

            if (document.querySelectorAll('.boxMatch').length === this.operaciones.length * 2) {
              setTimeout(() => {
                alert('¡Has hecho todos los matches!');
              }, 300);
            }
          } else {
            setTimeout(() => {
              document.querySelectorAll('.boxOpen').forEach(e => {
                e.classList.remove('boxOpen');
              });
            }, 600);
          }
        }
      });

      this.renderer.appendChild(this.elementRef.nativeElement.querySelector('.game'), box);
    }
  }

  checkMatch(firstBox: Element, secondBox: Element): boolean {
    const firstIndex = Array.from(this.operaciones)
      .findIndex(op => op.operacion === firstBox.innerHTML);
    const secondIndex = Array.from(this.operaciones)
      .findIndex(op => op.operacion === secondBox.innerHTML);

    return this.operaciones[firstIndex].resultado === this.operaciones[secondIndex].resultado;
  }

  resetMemoria() {
    document.querySelectorAll('.i').forEach(e => {
      e.remove();
    });
    this.initMemoria();
  }
}