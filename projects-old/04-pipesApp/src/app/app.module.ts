import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// configuracion del locale de la app
import localeFrCA from '@angular/common/locales/fr-CA';
import localeEsPE from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsPE);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
