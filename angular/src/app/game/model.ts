export interface Folder {
  _id: string;
  _rev: string;
  _deleted?: boolean;

  name: string;
  description: string;
  isArchived?: boolean;

  characters?: Array<{
    _id: string;
    name: string;
  }>;
}
