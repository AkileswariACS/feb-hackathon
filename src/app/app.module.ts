import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
// import { HttpModule
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TextToSpeechService } from './services/text-to-speech.service'; 
import { GenerateMp3Service } from './services/generate-mp3.service';
import { SaveToLocalStorageService } from './services/save-to-local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TextToSpeechService,GenerateMp3Service,SaveToLocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
