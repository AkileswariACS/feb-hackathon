import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
    ) { }

  youtubeApiKey:string = "AIzaSyC9qrDd7hMWinffcA78WmqlYQq9cm8NzRQ"
  youtubeCaptionApi:any = "https://www.googleapis.com/youtube/v3/captions?part=snippet&"

  getSubtitles(videoId:string) {
    let url = this.youtubeCaptionApi + `videoId=${videoId}&key=${this.youtubeApiKey}`
    return this.http.get(url)
  }

}
