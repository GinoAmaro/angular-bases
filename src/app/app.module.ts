import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CounterModule } from './counter/components/counter.module';
import { HeroeModule } from './heroes/heroe.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
