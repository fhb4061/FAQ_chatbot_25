import { Component } from '@angular/core';
import { Message } from './models/message';
import { timestamp } from 'rxjs/operators';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  public message : Message;
  public messages : Message[];

  constructor(){
    this.message = new Message('', 'assets/images/user.png');
    this.messages = [
      new Message('Welcome to AUT BCIS chatbot', 'assets/images/bot.jpg', new Date())
    ];
  }
}
