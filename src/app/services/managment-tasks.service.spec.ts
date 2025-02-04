import { TestBed } from '@angular/core/testing';

import { ManagmentTasksService } from './managment-tasks.service';

describe('ManagmentTasksService', () => {
  let service: ManagmentTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagmentTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
