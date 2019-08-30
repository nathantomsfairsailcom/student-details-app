// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './shared/components';
import {
  AdminPageComponent,
  FormPageComponent,
  SuccessPageComponent
} from './pages';
import { DetailsFormComponent } from './details-form/details-form.component';
import { PeopleFormComponent } from './people-form/people-form.component';

// Services
import { DetailsService } from './services';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CandidatesService } from './services/candidates-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormPageComponent,
    AdminPageComponent,
    SuccessPageComponent,
    DetailsFormComponent,
    PeopleFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
      ReactiveFormsModule,
      FormsModule
  ],
  providers: [DetailsService, CandidatesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
