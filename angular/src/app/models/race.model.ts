export interface Race{

  /*** Database Properties ***/
  _id: string;
  _rev: string;

  /*** Attributes ***/
  name: string;
  size: 'M'|'L'|'T'|'M';
}
