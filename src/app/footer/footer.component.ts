import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {

  date: any = new Date().getFullYear();
  footer: string = ` ${this.date} TS Piano`;

  constructor() { }

  ngOnInit() {
  }

}
