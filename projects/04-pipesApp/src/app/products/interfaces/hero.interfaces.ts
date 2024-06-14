export enum Color {
  red = 'red',
  black = 'black',
  blue = 'blue',
  green = 'green',
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
