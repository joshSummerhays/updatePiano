import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {

  logged: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value.username);
    console.log(form.value.password);
    if(form.value.username === 'tsummerhays' && form.value.password === 'pianoisfun'){
      this.logged = !this.logged;
    }
  }

  announceSubmit(form: NgForm) {
    console.log(form);
  }

}
