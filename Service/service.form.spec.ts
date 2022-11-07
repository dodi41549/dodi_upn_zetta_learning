import { TestBed } from '@angular/core/testing';

import { serviceform } from './service.form';

describe('serviceform', () => {
  let service: serviceform;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(serviceform);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
