import { TestBed, inject } from '@angular/core/testing';

import { CreateBuckelistService } from './create-bucketlist.service';

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
