import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class DialogflowService {
  private token: string = environment.token;//Get token from dialog flow
  private baseURL: string = "https://api.dialogflow.com/v1/query";//API of dialog Flow
  constructor(private http: Http) { }

  public getResponse(query: string){ //This method to get response from dialogflow
    let data = {//Create object to make session
      query : query,
      lang: 'en',
      sessionId: '12345'
    }
    let headers = new Headers();//create header
    headers.append('Authorization', `Bearer ${this.token}`);

    return this.http
      .post(`${this.baseURL}`, data, {headers: headers})
      .pipe(map(res => {
        return res.json()
      }));
  }
}
