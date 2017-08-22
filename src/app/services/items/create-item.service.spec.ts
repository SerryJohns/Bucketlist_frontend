import { TestBed, inject } from '@angular/core/testing';

import { CreateItemService } from './create-item.service';

describe('CreateItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreateItemService]
    });
  });

  it('should be created', inject([CreateItemService], (service: CreateItemService) => {
    expect(service).toBeTruthy();
  }));
});
