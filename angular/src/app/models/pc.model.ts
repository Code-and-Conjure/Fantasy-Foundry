export enum Alignment {
  "Lawful Evil",
  "Lawful Neutral",
  "Lawful Good",
  "Neutral Good",
  "Neutral Neutral",
  "Neutral Evil",
  "Chaotic Good",
  "Chaotic Neutral",
  "Chaotic Evil"
}

export interface PlayerCharacter {

  /*** Database Properties ***/
  _id: string;
  _rev: string;

  /*** Attribute Properties ***/
  age: number;
  alignment: Alignment;
  experience: number;
  handed: 'RIGHT'|'LEFT';
  name: string;
  gender: 'MALE'|'FEMALE';
  hair: string;
  eyes: string;
  height: number;
  weight: number;
  player: string;
  notes: any;

  /*** Dictionary Properties ***/
  ability_modifiers: Array<{
    [name:string]: number
  }>;
  ability_scores: Array<{
    [name:string]: number
  }>;
  ability_ranges: Array<{
    [name:string]: number
  }>;
  languages: Array<{
    [name:string]: boolean // Denotes whether this is a spoken language
  }>;
  levels: Array<{
    [level: number]: number
  }>;
  movement: Array<{
    [type: string]: number
  }>;
  skills: Array<{
    name: string;
    ranks: number;
    is_class: boolean;
    total: number
  }>;

  /*** Referenced Properties ***/
  abilities: Array<{
    _id: string;
    type_id: 'FEAT'|'RACE'|'TRAIT'|'CLASS';
    ability_type: 'SU'|'EX';
    name: string;
    description: string;
  }>;
  class: {
    _id: string;
    name: string;
  };
  diety: {
    _id: string;
    name: string;
  };
  inventory: Array<{
    _id: string;
    quantity: number;
    name: string;
    description: string;
    location: string;
  }>;
  race: {
    _id: string;
    name: string;
  };

  /*** Calculated Properties ***/
  current_level: number;
  health: {
    max: number;
    die: string;
    current: number;
    temporary: number;
  };
  armor_class: number;
  fortitude: number;
  reflex: number;
  will: number;
  melee: number;
  ranged: number;
  cmb: number;
  cmd: number;
  bab: number;
  initiative: number;
}
