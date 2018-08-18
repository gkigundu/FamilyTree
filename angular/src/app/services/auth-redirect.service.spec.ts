import { TestBed, inject } from '@angular/core/testing';

import { AuthRedirectService } from './auth-redirect.service';

describe('AuthRedirectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRedirectService]
    });
  });

  it('should be created', inject([AuthRedirectService], (service: AuthRedirectService) => {
    expect(service).toBeTruthy();
  }));
});
