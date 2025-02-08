import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent {
  @Input()
  public price: number = 0;

  public intervarl$?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO: ngOnInit');
    this.intervarl$ = interval(1000).subscribe((value) =>
      console.log(`Tick: ${value}`)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO: ngOnChanges');
    console.log({ changes });
  }
  ngOnDestroy(): void {
    console.log('Componente HIJO: ngOnDestroy');
    this.intervarl$?.unsubscribe();
  }
}
