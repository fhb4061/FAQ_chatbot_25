import { Injectable } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

export class Message {
  constructor(public content: string, public sentBy: string) {}
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }
}
