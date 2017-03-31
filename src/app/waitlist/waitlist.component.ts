import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
})
export class WaitlistComponent implements OnInit {

  waitShow: boolean = false;

  constructor(private http: HttpService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmit(form: NgForm) {
    this.http.postWait(form.value)
      .subscribe(
        (res) => console.log(res),
        (err) => console.log(err)
      );
      form.resetForm();
  }

  waitChange () {
    this.waitShow = !this.waitShow;
  }

}
