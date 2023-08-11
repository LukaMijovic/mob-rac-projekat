import { TestBed } from '@angular/core/testing';

import { PriceListServiceService } from './price-list-service.service';

describe('PriceListServiceService', () => {
  let service: PriceListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
