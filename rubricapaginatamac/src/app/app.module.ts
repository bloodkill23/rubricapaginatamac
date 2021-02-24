import { LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { logging } from 'protractor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountPageComponent } from './count-page/count-page.component';
import { ErrorMessagePageComponent } from './error-message-page/error-message-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SceltaComponent } from './scelta/scelta.component';
import { FormPanelComponent } from './form-panel/form-panel.component';

@NgModule({
  declarations: [
    //la madre morta di qualcuno
    AppComponent,
    CountPageComponent,
    ErrorMessagePageComponent,
    LoginPageComponent,
    MainPageComponent,
    SearchPageComponent,
    SceltaComponent,
    FormPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
