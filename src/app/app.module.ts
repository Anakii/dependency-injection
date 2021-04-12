import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoggerModule } from './logger.module';
import { loggerConfig, LOGGER_CONFIG } from './utils';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoggerModule.init(loggerConfig)
  ],
  providers: [
    // { provide: LOGGER_CONFIG, useValue: loggerConfig, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
