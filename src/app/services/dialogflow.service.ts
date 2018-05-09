import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/internal/observable';
// import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
@Injectable()
export class DialogflowService {
  private token: string = environment.token;
  private baseURL: string = "https://api.dialogflow.com/v1/query?v=20150910";
  constructor(private http: Http) { }

  public getResponse(query: string){ //This method to get response from diagramflow
    let data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    }
    return this.http
      .post(`${this.baseURL}`, data, {headers: this.getHeaders()})
      .subscribe(res => {
        return res.json()
      })
  }

  public getHeaders(){
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
