import { Component } from '@angular/core';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-audio-config',
  templateUrl: './audio-config.component.html',
  styleUrls: ['./audio-config.component.css']
})
export class AudioConfigComponent {
  constructor(public audioService: AudioService) {}

  toggleSound() {
    this.audioService.toggle();
  }

  adjustVolume(event: any) {
    this.audioService.setVolume(event.target.value);
  }

  prevTrack() {
    this.audioService.prev();
  }

  nextTrack() {
    console.log('Changing to the next track...');
  this.audioService.next();
  }
}