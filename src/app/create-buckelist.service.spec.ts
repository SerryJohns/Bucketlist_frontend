import { TestBed, inject } from '@angular/core/testing';

import { CreateBuckelistService } from './create-buckelist.service';

describe('CreateBuckelistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateBuckelistService]
    });
  });

  it('should be created', inject([CreateBuckelistService], (service: CreateBuckelistService) => {
    expect(service).toBeTruthy();
  }));
});
