import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { DialogflowService } from '../../services/dialogflow.service';
@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Input('message')
  private message : Message;

  @Input('messages')
  private messages : Message[];

  constructor() { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.message = new Message('', 'assets/images/user.png');
  }
}
