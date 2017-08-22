import { TestBed, inject } from '@angular/core/testing';

import { SearchBucketlistService } from './search-bucketlist.service';

describe('SearchBucketlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchBucketlistService]
    });
  });

  it('should be created', inject([SearchBucketlistService], (service: SearchBucketlistService) => {
    expect(service).toBeTruthy();
  }));
});
