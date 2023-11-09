import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContainerComponent } from './list-container/list-container.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,ListContainerComponent]
})
export class AppModule { }
