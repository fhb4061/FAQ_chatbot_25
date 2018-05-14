import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs/internal/observable';
import {map} from 'rxjs/operators';
//import 'rxjs';
import { environment } from '../../environments/environment';
@Injectable()
export class DialogflowService {
  private token: string = environment.token;
  private baseURL: string = "https://api.dialogflow.com/v1/query";
  constructor(private http: Http) { }

  public getResponse(query: string){ //This method to get response from diagramflow
    let data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    }
    let headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);

    return this.http
      .post(`${this.baseURL}`, data, {headers: headers})
      .pipe(map(res => {
        return res.json()
      }));
  }
}
