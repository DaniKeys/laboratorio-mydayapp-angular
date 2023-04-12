import { TestBed } from '@angular/core/testing';

import { LocalStoragedService } from './local-storaged.service';

describe('LocalStoragedService', () => {
  let service: LocalStoragedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStoragedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
