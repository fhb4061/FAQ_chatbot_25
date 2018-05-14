import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { Message } from '../../models/message';
@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input('messages')
  messages: Message[];//Declare message array

  constructor() { }

  ngOnInit() {
  }

  

}
