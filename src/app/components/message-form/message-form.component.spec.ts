import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFormComponent } from './message-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Message } from '../../models/message';
import { DialogflowService } from '../../services/dialogflow.service';

describe('MessageFormComponent', () => {
  let component: MessageFormComponent;
  let fixture: ComponentFixture<MessageFormComponent>;
  let testdialoglow : DialogflowService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageFormComponent ],
      providers: [DialogflowService],
      imports: [ FormsModule,HttpModule ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MessageFormComponent);
      component = fixture.componentInstance; // BannerComponent test instance
      //fixture.detectChanges();
    });
  }));

  //Test if 2 string are equal
  let expectedmessage = new Message('Hi there, may I get your name please?', '', new Date());
  let testmessagecontent = 'Hi there, may I get your name please?';

  it('expected message equals as the tested message', () => {
    expect(testmessagecontent).toEqual(expectedmessage.content);
  });

//Test if the component is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
