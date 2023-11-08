import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2){ }

  signinBtn: HTMLElement | null = this.el.nativeElement.querySelector('.signinBtn');
  signupBtn: HTMLElement | null = this.el.nativeElement.querySelector('.signupBtn');
  
  @ViewChild('der')
  der!: ElementRef<HTMLDivElement>
  // body!: Element<HTMLDivElement>

  ngOnInit() {

  }

  iniciarSession(){
    this.der.nativeElement.classList.remove('slide');
  }


  registrarSession(){
    this.der.nativeElement.classList.add('slide');
  }

}

