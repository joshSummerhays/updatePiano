import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-top-content',
  templateUrl: './top-content.component.html',
})
export class TopContentComponent implements OnInit {

    announcement: string;
    play: boolean = false;
    mediaURL: string = "./assets/images/dusk-piano.jpg";

    constructor(private http: HttpService) { }

    playMovie() {
        this.play = true;
    }

    chooseMedia (media) {
      if (media === 'photo') {
        this.mediaURL = "./assets/images/dusk-piano.jpg";
      } else if (media === 'photo2') {
        this.mediaURL = "./assets/images/treble-note.png";
      } else if (media === 'photo3') {
        this.mediaURL = "./assets/images/piano-beginner.jpg"; 
      } else if (media === 'photo4') {
        this.mediaURL = "./assets/images/kid-piano.jpg";
      } 
      // else if () {
      //   this.mediaURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Treble_a.svg/1280px-Treble_a.svg.png"
      // }
    }

  ngOnInit() {
     this.http.getAnnounce()
          .subscribe(
        (res) => {
          this.announcement = res.json()[0].text;
        },
        (err) => console.log(err)
      );;
  }

}
