import { TestBed, inject } from '@angular/core/testing';

import { ClassifiedService } from './classified.service';

describe('ClassifiedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassifiedService]
    });
  });

  it('should be created', inject([ClassifiedService], (service: ClassifiedService) => {
    expect(service).toBeTruthy();
  }));
});
