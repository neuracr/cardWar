export class Card {
  value: string; // value of the card in {A,2,3,4,5,6,7,8,9,0,J,Q,K}
  color: string; // color of the card in {s,h,d,c}

  public toString(): string{
    return this.value + this.color;
  }
}