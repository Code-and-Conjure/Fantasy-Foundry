import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PlayerCharacterEffects } from './pc.effects';

describe('PlayerCharacterEffects', () => {
  let actions$: Observable<any>;
  let effects: PlayerCharacterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PlayerCharacterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PlayerCharacterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
