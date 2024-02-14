import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {


  constructor (
    private homeService:HomeService
  ) {

  }


  name = 'Angular';
  urlValue: string = '';
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

}
