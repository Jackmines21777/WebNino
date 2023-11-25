import { Injectable } from '@angular/core';
import { Howl } from 'howler';


@Injectable({
  providedIn: 'root'
})
export class AudioService {

 
  private sound: Howl;

  constructor() {
    this.sound = new Howl({
      src: ['assets/song.mp3'],
      loop: true,
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
}