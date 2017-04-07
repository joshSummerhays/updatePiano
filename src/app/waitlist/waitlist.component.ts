import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-waitlist',
  templateUrl: './waitlist.component.html',
})
export class WaitlistComponent implements OnInit {

  waitShow: boolean = false;
  subMessage: string;

  exp: string[] = ['none', '1', '2', '3', '4', '5+']; 

  constructor(private http: HttpService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  onSubmit(form: NgForm) {
    form.value.date = new Date().toDateString();
    this.http.postWait(form.value)
      .subscribe(
        (res) => {
          if(res.status === 200) {
            this.subMessage = 'Waitlist request successfully recieved!';
          } else {
            this.subMessage = 'ERROR: something went wrong with your request, please try again later';
          }
        },
        (err) => {
          console.log('err', err)
          this.subMessage = 'ERROR: error with your request, please try again later';
        }
      );
      form.resetForm();
  }

  waitChange () {
    this.waitShow = !this.waitShow;
  }

}
