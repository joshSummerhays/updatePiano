import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'app works!';

  loader: boolean = true;

  ngOnInit () {
    setTimeout(
      () => {
        this.loader = !this.loader;
      }, 4000
    );
  }
}
