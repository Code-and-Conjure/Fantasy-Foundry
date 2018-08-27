import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Pc } from '../pc.model';

export enum PcActionTypes {
  LoadPcs = '[Pc] Load Pcs',
  AddPc = '[Pc] Add Pc',
  UpsertPc = '[Pc] Upsert Pc',
  AddPcs = '[Pc] Add Pcs',
  UpsertPcs = '[Pc] Upsert Pcs',
  UpdatePc = '[Pc] Update Pc',
  UpdatePcs = '[Pc] Update Pcs',
  DeletePc = '[Pc] Delete Pc',
  DeletePcs = '[Pc] Delete Pcs',
  ClearPcs = '[Pc] Clear Pcs'
}

export class LoadPcs implements Action {
  readonly type = PcActionTypes.LoadPcs;

  constructor(public payload: { pcs: Pc[] }) {}
}

export class AddPc implements Action {
  readonly type = PcActionTypes.AddPc;

  constructor(public payload: { pc: Pc }) {}
}

export class UpsertPc implements Action {
  readonly type = PcActionTypes.UpsertPc;

  constructor(public payload: { pc: Pc }) {}
}

export class AddPcs implements Action {
  readonly type = PcActionTypes.AddPcs;

  constructor(public payload: { pcs: Pc[] }) {}
}

export class UpsertPcs implements Action {
  readonly type = PcActionTypes.UpsertPcs;

  constructor(public payload: { pcs: Pc[] }) {}
}

export class UpdatePc implements Action {
  readonly type = PcActionTypes.UpdatePc;

  constructor(public payload: { pc: Update<Pc> }) {}
}

export class UpdatePcs implements Action {
  readonly type = PcActionTypes.UpdatePcs;

  constructor(public payload: { pcs: Update<Pc>[] }) {}
}

export class DeletePc implements Action {
  readonly type = PcActionTypes.DeletePc;

  constructor(public payload: { id: string }) {}
}

export class DeletePcs implements Action {
  readonly type = PcActionTypes.DeletePcs;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearPcs implements Action {
  readonly type = PcActionTypes.ClearPcs;
}

export type PcActions =
 LoadPcs
 | AddPc
 | UpsertPc
 | AddPcs
 | UpsertPcs
 | UpdatePc
 | UpdatePcs
 | DeletePc
 | DeletePcs
 | ClearPcs;
