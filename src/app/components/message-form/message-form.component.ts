import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { DialogflowService } from '../../services/dialogflow.service';
import 'rxjs';
@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {
  @Input('message')
  message : Message;

  @Input('messages')
  messages : Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {  //Void method to send message to chatbot
    if(this.message["content"] == '' || this.message["content"] == null){
      //check if the text is blank
      console.log('Please enter your message');
    }else{

      this.message["timestamp"] = new Date();// set property timestamp to get current date
      this.messages.push(this.message);//Push to message array


      this.dialogFlowService.getResponse(this.message["content"]).subscribe(res => {//Send message content to chatbot
        this.messages.push(
          new Message(res.result.speech, 'assets/images/bot.jpg', res.timestamp)//Get response from diagramflow
        );
      });
      this.message = new Message('', 'assets/images/user.png', new Date);//create new object
    }

  }
}
