import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import { MessageItemComponent } from '../message-item/message-item.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DialogflowService } from '../../services/dialogflow.service';

describe('MessageListComponent', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListComponent,
        MessageItemComponent ],
        providers: [DialogflowService],
        imports: [ FormsModule,HttpModule ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MessageListComponent);
      component = fixture.componentInstance; // BannerComponent test instance
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MessageListComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
