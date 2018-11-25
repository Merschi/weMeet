import { TestBed, inject } from '@angular/core/testing';

import { AcceptStoreService } from './accept-store.service';

describe('AcceptStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcceptStoreService]
    });
  });

  it('should be created', inject([AcceptStoreService], (service: AcceptStoreService) => {
    expect(service).toBeTruthy();
  }));
});
