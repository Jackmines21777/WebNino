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

  adjustVolume(event: Event) {
    const target = event.target as HTMLInputElement;
    const volume = parseFloat(target.value);
    this.audioService.setVolume(volume);
  }
}
