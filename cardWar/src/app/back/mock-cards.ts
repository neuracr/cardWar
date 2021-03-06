import { Card } from './card';

const VALUES: string[] = ['A', 'J', 'Q', 'K'], //['A', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'J', 'Q', 'K'],
      COLORS: string[] = ['s', 'h', 'd', 'c'];

export var CARDS: Card[] = [];

for (let i in VALUES) {
    for (let j in COLORS) {
        CARDS.push(
            {value: VALUES[i], color: COLORS[j]}
        );
    }
} 