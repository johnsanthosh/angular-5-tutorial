import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SuccessalertComponent } from './successalert/successalert.component';
import {WarningalertComponent} from './warningalert/warningalert.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessalertComponent,
    WarningalertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
