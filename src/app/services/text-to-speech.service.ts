import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {

  speechSynthesis: SpeechSynthesis;
  voices: SpeechSynthesisVoice[];

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.voices = this.speechSynthesis.getVoices();
  }

  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    const selectedVoice = this.voices.find(voice => voice.lang === 'en-US');
    utterance.voice = selectedVoice ? selectedVoice : null;
    this.speechSynthesis.speak(utterance);
  }
}