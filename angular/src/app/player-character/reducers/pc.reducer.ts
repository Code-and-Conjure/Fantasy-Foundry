import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import {
  MetaReducer
} from '@ngrx/store';
import { Pc } from '../pc.model';
import { PcActions, PcActionTypes } from '../actions/pc.actions';
import { environment } from '../../../environments/environment';

export interface State extends EntityState<Pc> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Pc> = createEntityAdapter<Pc>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: PcActions
): State {
  switch (action.type) {
    case PcActionTypes.AddPc: {
      return adapter.addOne(action.payload.pc, state);
    }

    case PcActionTypes.UpsertPc: {
      return adapter.upsertOne(action.payload.pc, state);
    }

    case PcActionTypes.AddPcs: {
      return adapter.addMany(action.payload.pcs, state);
    }

    case PcActionTypes.UpsertPcs: {
      return adapter.upsertMany(action.payload.pcs, state);
    }

    case PcActionTypes.UpdatePc: {
      return adapter.updateOne(action.payload.pc, state);
    }

    case PcActionTypes.UpdatePcs: {
      return adapter.updateMany(action.payload.pcs, state);
    }

    case PcActionTypes.DeletePc: {
      return adapter.removeOne(action.payload.id, state);
    }

    case PcActionTypes.DeletePcs: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case PcActionTypes.LoadPcs: {
      return adapter.addAll(action.payload.pcs, state);
    }

    case PcActionTypes.ClearPcs: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
