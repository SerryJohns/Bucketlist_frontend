import { TestBed, inject } from '@angular/core/testing';

import { DeleteBucketlistService } from './delete-bucketlist.service';

describe('DeleteBucketlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteBucketlistService]
    });
  });

  it('should be created', inject([DeleteBucketlistService], (service: DeleteBucketlistService) => {
    expect(service).toBeTruthy();
  }));
});
