import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageFormComponent } from './message-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DialogflowService } from '../../services/dialogflow.service';

describe('MessageFormComponent', () => {
  let component: MessageFormComponent;
  let fixture: ComponentFixture<MessageFormComponent>;

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


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
