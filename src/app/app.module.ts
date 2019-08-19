import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components';
import { FormPageComponent, SuccessPageComponent } from './pages';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormPageComponent,
    SuccessPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
