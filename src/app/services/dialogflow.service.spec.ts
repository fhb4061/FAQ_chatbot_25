import { TestBed, inject } from '@angular/core/testing';

import { DialogflowService } from './dialogflow.service';
import { HttpModule } from '@angular/http';

describe('DialogflowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DialogflowService],
      imports: [ HttpModule ]
    });
  });


  it('should be created', inject([DialogflowService], (service: DialogflowService) => {
    expect(service).toBeTruthy();
  }));
});
