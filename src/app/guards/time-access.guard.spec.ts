import { TestBed, async, inject } from '@angular/core/testing';

import { TimeAccessGuard } from './time-access.guard';

describe('TimeAccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeAccessGuard]
    });
  });

  it('should ...', inject([TimeAccessGuard], (guard: TimeAccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
