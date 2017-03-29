import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
})
export class WaitlistComponent implements OnInit {

  waitShow: boolean = false;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

  waitChange () {
    this.waitShow = !this.waitShow;
  }

}
