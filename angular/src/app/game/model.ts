export interface Folder {
  _id: string;
  _rev: string;

  name: string;
  description: string;

  characters?: Array<{
    _id: string;
    name: string;
  }>;
}
