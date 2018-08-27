import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PcEffects } from './pc.effects';

describe('PcEffects', () => {
  let actions$: Observable<any>;
  let effects: PcEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PcEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PcEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
