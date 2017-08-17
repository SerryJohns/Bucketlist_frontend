import { TestBed, inject } from '@angular/core/testing';

import { EditBucketlistService } from './edit-bucketlist.service';

describe('EditBucketlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditBucketlistService]
    });
  });

  it('should be created', inject([EditBucketlistService], (service: EditBucketlistService) => {
    expect(service).toBeTruthy();
  }));
});
