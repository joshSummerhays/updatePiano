import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class HttpService {

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  postWait(person) {
    return this.http.post('/api/waitlisters', person)
      .catch((err: Response) => Observable.throw(err.json()));
  }

  getWait() {
    return this.http.get('/api/waitlisters')
      .catch((error: Response) => Observable.throw(error.json()));
  }

  deleteWait(id) {
     return this.http.delete(`/api/waitlisters/${id}`)
      .catch((error: Response) => Observable.throw(error.json()));
  }

  getAnnounce() {
    return this.http.get('/api/announce')
      .catch((error: Response) => Observable.throw(error.json()));    
  }

  patchAnnounce(body) {
    return this.http.patch('/api/announce', body, this.headers)
      .catch((error: Response) => Observable.throw(error.json()));        
  }


}
