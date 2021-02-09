export interface IActivityRequest {
  activity?: string;
  type?: ActivityType;
  participants?: number;
  price?: number;
  link?: string;
  key?: number;
  accessibility?: number;
}

export interface IActivityResponse {
  activity: string;
  type: ActivityType;
  participants: number;
  price: number;
  link: string;
  key: number;
  accessibility: number;
}

export enum ActivityType {
  Education = 'education',
  Recreational = 'recreational',
  Social = 'social',
  Diy = 'diy',
  Charity = 'charity',
  Cooking = 'cooking',
  Relaxation = 'relaxation',
  Music = 'music',
  Busywork = 'busywork',
}
