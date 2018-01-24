import { Card } from './card';

export class Player {
    id: number;
    username: string;
    score: number;
    pack: Card[] = [];
  }