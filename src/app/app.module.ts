import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from '../app/material/material/material.module'
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ApiService,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
