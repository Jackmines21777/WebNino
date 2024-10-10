import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register-login',
  templateUrl: './register-login.component.html',
  styleUrls: ['./register-login.component.css']
})

export class RegisterLoginComponent implements OnInit  {

  constructor(private el: ElementRef, private renderer: Renderer2){ }

  
  @ViewChild('body') body!: ElementRef;
  @ViewChild('login__registerBx') login__registerBx!: ElementRef;
  @ViewChild('login__iniciarSesionBx') login__iniciarSesionBx!: ElementRef;


  ngOnInit() {

  }


  iniciarSession(){
    this.body.nativeElement.classList.remove('slide');

    this.login__iniciarSesionBx.nativeElement.style.display = 'none';
    
    this.login__registerBx.nativeElement.style.display = 'block';
    this.login__registerBx.nativeElement.style.opacity = '1';
  }


  registrarSession(){
    this.body.nativeElement.classList.add('slide');
    this.login__registerBx.nativeElement.style.display = 'none';

    this.login__iniciarSesionBx.nativeElement.style.display = 'block';
    this.login__iniciarSesionBx.nativeElement.style.opacity = '1';

  }

  
}



