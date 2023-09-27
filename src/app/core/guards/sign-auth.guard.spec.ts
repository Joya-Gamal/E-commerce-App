import { TestBed } from '@angular/core/testing';

import { SignAuthGuard } from './sign-auth.guard';

describe('SignAuthGuard', () => {
  let guard: SignAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SignAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
