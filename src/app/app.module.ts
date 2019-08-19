// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './shared/components';
import { FormPageComponent, SuccessPageComponent } from './pages';
import { DetailsFormComponent } from './details-form/details-form.component';

// Services
import { DetailsService } from './services';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      FormPageComponent,
      SuccessPageComponent,
      DetailsFormComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
  providers: [DetailsService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
