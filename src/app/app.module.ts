import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListContainerComponent,
    CalculatorComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,ListContainerComponent]
})
export class AppModule { }
