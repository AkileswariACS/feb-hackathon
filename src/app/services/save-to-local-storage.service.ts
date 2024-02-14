// save-to-local-storage.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveToLocalStorageService {
  saveAudioToLocalStorage(blob: Blob): void {
    const audioUrl = URL.createObjectURL(blob);
    console.log(audioUrl);
    
    localStorage.setItem('audioUrl', audioUrl);
  }
}
