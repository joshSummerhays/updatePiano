import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  logged: boolean = false;
  waiters: any;

  constructor(private http: HttpService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value.username);
    console.log(form.value.password);
    if(form.value.username === 'tsummerhays' && form.value.password === 'piano'){
      this.logged = !this.logged;
    }
  }

  announceSubmit(form: NgForm) {
    console.log(form);
  }

  showWait() {
    this.http.getWait()
      .subscribe(
        (res) => {
          this.waiters = res.json();
        },
        (err) => console.log(err)
      );
  }

}
