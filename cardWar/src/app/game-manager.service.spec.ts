import { TestBed, inject } from '@angular/core/testing';

import { GameManagerService } from './game-manager.service';

describe('GameManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameManagerService]
    });
  });

  it('should be created', inject([GameManagerService], (service: GameManagerService) => {
    expect(service).toBeTruthy();
  }));
});
