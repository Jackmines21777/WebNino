import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})

export class RegisterLoginComponent implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2){ }

  signinBtn: HTMLElement | null = this.el.nativeElement.querySelector('.signinBtn');
  signupBtn: HTMLElement | null = this.el.nativeElement.querySelector('.signupBtn');
  
  @ViewChild('body')
  body!: ElementRef<HTMLDivElement>
  // body!: Element<HTMLDivElement>

  ngOnInit() {

  }


  iniciarSession(){
    this.body.nativeElement.classList.remove('slide');
  }


  registrarSession(){
    this.body.nativeElement.classList.add('slide');
  }
  
}

  


