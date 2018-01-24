import { Pipe, PipeTransform } from '@angular/core';
import { Card } from '../back/Card';

@Pipe({
  name: 'shuffle'
})

export class ShufflePipe implements PipeTransform {
  transform(stack: Card[]): Card[] {
    for (let i = stack.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        stack[i], stack[j] = stack[j], stack[i];
    }
    return stack;
  }
}