import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service'; 
import { GenerateMp3Service } from 'src/app/services/generate-mp3.service';
 import { SaveToLocalStorageService } from 'src/app/services/save-to-local-storage.service'; // Import SaveToLocalStorageService


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {


  constructor (
    private homeService:HomeService,
    private textToSpeechService: TextToSpeechService ,
    private generateMp3Service: GenerateMp3Service,
    private saveToLocalStorageService: SaveToLocalStorageService 
  ) {

  }


  name = 'Angular';
  urlValue: string = '';
  summary: string = 'Hello';
  textToConvert: string = '';
  audioUrl:any
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }

  getSubtitles(url:string){

    // Regular expression pattern to match YouTube video ID
    const regex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    // Match the video ID using the regular expression
    const match = url.match(regex);

    // Extract the video ID from the match
    const videoId = match && match[1];
    console.log("url",videoId);
    this.homeService.getSubtitles(videoId?videoId:'').subscribe(
      (subtitles) => {
        // Handle the subtitles response
        console.log('Subtitles:', subtitles);
        // Implement logic to display summary video
      },
      (error) => {
        console.error('Error fetching subtitles:', error);
      }
    );
  }

  playSummary(inputText:string) {
    console.log("test");
    
    // Call the TextToSpeechService to play the summary text
    this.textToSpeechService.speak(inputText);
  }
  // convertAndSave(): void {
  //   this.textToSpeechService.speak(this.textToConvert);
    
  //   // Simulate audio generation
  //   const audioBlob = this.generateMp3Service.generateAudioBlob(this.textToConvert);
    
  //   // Save audio to local storage
  //   this.saveToLocalStorageService.saveAudioToLocalStorage(audioBlob);
  // }
  async convertAndSave(): Promise<void> {
    this.textToSpeechService.speak(this.textToConvert);
    
    try {
      // Generate audio blob
this.audioUrl = this.generateMp3Service.generateAudioBlob(this.textToConvert);

this.downloadAudio()
      // Save audio to local storage
      this.saveToLocalStorageService.saveAudioToLocalStorage(this.audioUrl);
    } catch (error) {
      console.error('Error generating audio:', error);
    }
  }
  downloadAudio(): void {
    if (this.audioUrl) {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = this.audioUrl;
      link.download = 'audio.mp3';
      document.body.appendChild(link);
      
      // Trigger the download
      link.click();
      
      // Clean up
      document.body.removeChild(link);
    }
  }



}
