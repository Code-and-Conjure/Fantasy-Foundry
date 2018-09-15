import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { GameEffects } from './game.effects';

describe('GameEffects', () => {
  let actions$: Observable<any>;
  let effects: GameEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GameEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(GameEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
