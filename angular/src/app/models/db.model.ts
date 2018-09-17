export interface DbPutResponse {
  ok: boolean;
  id: string;
  rev: string;
}

export interface DbQuery<T> {
  offset: number;
  total_rows: number;
  rows: Array<{ doc?: T }>;
}
