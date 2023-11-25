import { style } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit {

  emojis: any[] = ["🥵", "🥵", "🥶", "🥶", "😡", "😡", "🤯", "🤯", "🥑", "🥑",
    "🐸", "🐸", "😍", "😍", "👻", "👻"];

  shuf_emojis : any

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  ngOnInit(): void {
    this.initMemoria()
  }


  initMemoria() {
    this.shuf_emojis = this.emojis.sort(() => (Math.random() > .5) ? 2 : -1);
    for (let i: number = 0; i < this.emojis.length; i++) {

      let box: HTMLDivElement = this.renderer.createElement('div')
      // let box = document.createElement("div")
      // console.log(box)

      //* box.classList.add("i") => si funciona, pero es mala practia
      this.renderer.addClass(box, "i")

      // box.innerHTML = this.shuf_emojis[i];//* setea valor => pero es mala practica
      this.renderer.appendChild(box, this.renderer.createText(this.shuf_emojis[i]))

      //*asigna evento click
      box.addEventListener('click', () => {
        // box.classList.add('boxOpen');
        this.renderer.addClass(box, 'boxOpen');
        
        //* solo se ejecutara si se encuentran 2 elementos con la clase `boxOpen`
        if (document.querySelectorAll('.boxOpen').length > 1 && document.querySelectorAll('.boxOpen').length <= 2) {//* si encuentra a auno que tenga la clase .boxOpen
          console.log( document.querySelectorAll('.boxOpen'))
          console.log( document.querySelectorAll('.boxOpen')[0])
          console.log( document.querySelectorAll('.boxOpen')[1])
          //* si el  contenido coincide con el anterior
          if (document.querySelectorAll('.boxOpen')[0].innerHTML == document.querySelectorAll('.boxOpen')[1].innerHTML) {

            //* se le da al calse match a los elementos <=> coinciden en contenido.
            document.getElementsByClassName('boxOpen')[0].classList.add('boxMatch')
            document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

            document.querySelectorAll('.boxOpen')[0]?.classList.remove('boxOpen')
            document.querySelectorAll('.boxOpen')[1]?.classList.remove('boxOpen')

            if (document.querySelectorAll('.boxMatch').length > 0) {
              setTimeout(() => {
                // alert('Hiciste un match')
              }, 300)

            }

          } else {

            setTimeout(() => {
              //   document.querySelectorAll('.boxOpen')[1].classList.remove
              //   ('boxOpen')
              // document.querySelectorAll('.boxOpen')[0].classList.remove
              //   ('boxOpen')
              document.querySelectorAll('.boxOpen').forEach(e => {
                e.classList.remove('boxOpen')
              })
            }, 600)
            // alert('toda la vida escogiendo mal')

          }
        }

      });

      this.renderer.appendChild(this.elementRef.nativeElement.querySelector('.game'), box);
      // document.querySelector('.game')!.appendChild(box);
      // console.log( document.querySelector('.game'))
    }
  }

  resetMemoria() {
    document.querySelectorAll(".i").forEach( e => {
      e.remove();
    })
    // this.renderer.removeChild()
    this.initMemoria();
  }


}
