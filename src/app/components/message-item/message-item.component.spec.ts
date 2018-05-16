import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageItemComponent } from './message-item.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DialogflowService } from '../../services/dialogflow.service';

describe('MessageItemComponent', () => {
  let component: MessageItemComponent;
  let fixture: ComponentFixture<MessageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageItemComponent ], 
      providers: [DialogflowService],
      imports: [ FormsModule,HttpModule ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(MessageItemComponent);
      component = fixture.componentInstance; // BannerComponent test instance
      //fixture.detectChanges();
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(MessageItemComponent);
  //   component = fixture.componentInstance;
    
  // });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
