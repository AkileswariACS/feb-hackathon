
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateMp3Service {
  generateAudioBlob(text: string): Blob {
    const utterance = new SpeechSynthesisUtterance(text);
    const synthesis = window.speechSynthesis;
    synthesis.speak(utterance);

    return new Blob([new Uint8Array(0)]);
    // Replace with actual audio generation logic, capturing audio output
  }
}
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class GenerateMp3Service {
//   generateAudioBlob(text: string): Promise<Blob> {
//     return new Promise((resolve, reject) => {
//       const audioContext = new AudioContext();
//       const scriptNode = audioContext.createScriptProcessor(4096, 1, 1);
//       const synthesis = window.speechSynthesis;
//       const utterance = new SpeechSynthesisUtterance(text);
//       const buffers: Float32Array[] = [];

//       scriptNode.onaudioprocess = (event: AudioProcessingEvent) => {
//         const inputBuffer = event.inputBuffer.getChannelData(0).slice();
//         buffers.push(new Float32Array(inputBuffer));
//       };

//       synthesis.speak(utterance);

//       utterance.onend = () => {
//         const buffer = mergeBuffers(buffers);
//         const mp3Encoder = new lamejs.Mp3Encoder(1, audioContext.sampleRate, 128);
//         const mp3Data = mp3Encoder.encodeBuffer(buffer);
//         const audioBlob = new Blob([mp3Data], { type: 'audio/mp3' });
//         resolve(audioBlob);
//       };
//     });
//   }
// }

// function mergeBuffers(buffers: Float32Array[]): Float32Array {
//   let length = 0;
//   buffers.forEach(buffer => {
//     length += buffer.length;
//   });
//   const result = new Float32Array(length);
//   let offset = 0;
//   buffers.forEach(buffer => {
//     result.set(buffer, offset);
//     offset += buffer.length;
//   });
//   return result;
// }
