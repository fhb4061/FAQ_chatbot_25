import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { MessageFormComponent } from './components/message-form/message-form.component';
import { MessageItemComponent } from './components/message-item/message-item.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import {Message} from './models/message';
import { DialogflowService } from './services/dialogflow.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
describe('AppComponent', () => {
let component: AppComponent;
let fixture:   ComponentFixture<AppComponent>;
// let h1:        HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MessageListComponent,
    MessageItemComponent,
    MessageFormComponent
      ],
      providers: [DialogflowService],imports: [ FormsModule,HttpModule ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance; // BannerComponent test instance
    });
  }));

  
//   h1 = fixture.nativeElement.querySelector('h1');

  // it('title should display "Chatbot25" ', () => {
  //   expect(h1.textContent).toEqual('Chatbot25');
  // });
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // it(`should have as title 'Chatbot25'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Chatbot25');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Chatbot25');
  // }));
});
