import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-un-common-page',
  templateUrl: './un-common-page.component.html',
  styleUrl: './un-common-page.component.css',
})
export class UnCommonPageComponent {
  // i18n Select
  name = 'Angel';
  gender: 'male' | 'female' = 'male';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient() {
    if (this.gender === 'male') {
      this.gender = 'female';
      this.name = 'Andrea';
    } else {
      this.gender = 'male';
      this.name = 'Angel';
    }
  }

  // i18n Plural
  clients: string[] = ['Maria', 'Juan', 'Samanta', 'Alex', 'Susy'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'un cliente esperando',
    other: 'tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clients.shift();
  }

  // KeyValue pipe
  public person = { name: 'angel', age: 20, gender: 'male' };

  // async pipe
  public myObservableTime: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('tap:', value))
  );

  public promiseVelue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data en la promesa');
    }, 3500);
  });
}
