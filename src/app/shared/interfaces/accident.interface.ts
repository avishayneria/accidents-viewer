
export interface Accident {
  EventTime: string;
  mechanism: string;
  kinematic: string;
  MDA: string;
  isTreated: boolean;
  gps: Gps;
  injuries: Injury[];
}

export interface Gps {
  latitude: number;
  longitude: number;
}
export interface Injury {
  severity: string;
  description: string;
  location: string;
}
