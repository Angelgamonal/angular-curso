import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interfaces';

@Pipe({ name: 'boxColor' })
export class BoxColorPipe implements PipeTransform {
  transform(color: Color): string {
    return `background:${color};`;
  }
}
