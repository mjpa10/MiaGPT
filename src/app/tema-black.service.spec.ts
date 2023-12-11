import { TestBed } from '@angular/core/testing';

import { TemaBlackService } from './tema-black.service';

describe('TemaBlackService', () => {
  let service: TemaBlackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemaBlackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
