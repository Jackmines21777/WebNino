import { Injectable } from '@angular/core';
import { Howl } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class AudioService {

 
  private playlist: string[] = [
    'assets/intro.mp3',
    'assets/song.mp3',
    'assets/navidad.mp3',
    // Agrega más canciones según sea necesario
  ];
  private currentIndex = 0;
  private sound!: Howl;

  constructor() {
    this.initializeHowl();
  }

  private initializeHowl() {
    this.sound = new Howl({
      src: [this.playlist[this.currentIndex]],
      loop: false, // No necesitas loop aquí, ya que manejaremos el cambio de pista manualmente
    });

    // Agregamos un evento "end" para manejar el cambio de pista al finalizar la reproducción
    this.sound.on('end', () => {
      this.autoPlayNext();
    });
  }

  play() {
    this.sound.play();
  }

  pause() {
    this.sound.pause();
  }

  toggle() {
    this.sound.playing() ? this.pause() : this.play();
  }

  isSoundOn() {
    return this.sound.playing();
  }

  setVolume(volume: number) {
    this.sound.volume(volume);
  }

  getVolume() {
    return this.sound.volume();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.playlist.length;
    this.changeTrack();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.playlist.length) % this.playlist.length;
    this.changeTrack();
  }

  private changeTrack() {
    this.sound.stop();
    this.sound.unload();
    this.initializeHowl(); // Inicializamos una nueva instancia de Howl para la siguiente pista
    this.play();
  }

  private autoPlayNext() {
    this.next();
  }
}