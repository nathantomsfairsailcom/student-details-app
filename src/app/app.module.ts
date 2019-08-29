// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './shared/components';
import { FormPageComponent, SuccessPageComponent } from './pages';
import { DetailsFormComponent } from './details-form/details-form.component';

// Services
import { DetailsService } from './services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
      HttpClientModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule
   ],
  providers: [DetailsService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule {}
