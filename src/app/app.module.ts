// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components';
import { FormPageComponent, SuccessPageComponent } from './pages';

// Services
import { DetailsService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormPageComponent,
    SuccessPageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
