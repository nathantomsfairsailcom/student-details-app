// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent } from './shared/components';
import { LoginPageComponent,
  AdminPageComponent,
  FormPageComponent,
  SuccessPageComponent
} from './pages';
import { DetailsFormComponent, PeopleFormComponent } from './components';

// Services
import { DetailsService, AuthService } from './services';

// Forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CandidatesService } from './services/candidates-service';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyCeGE_Q72ocTkkL852sw-IQGjqxdw8gFoU',
  authDomain: 'student-details-app-sgp.firebaseapp.com',
  databaseURL: 'https://student-details-app-sgp.firebaseio.com',
  projectId: 'student-details-app-sgp',
  storageBucket: 'student-details-app-sgp.appspot.com',
  messagingSenderId: '1000454251268',
  appId: '1:1000454251268:web:7b0acb11bb104788'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormPageComponent,
    AdminPageComponent,
    SuccessPageComponent,
      DetailsFormComponent,
      LoginPageComponent,
      PeopleFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule
  ],
  providers: [DetailsService, CandidatesService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
