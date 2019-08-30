import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent,
  FormPageComponent,
  SuccessPageComponent,
  AdminPageComponent
} from './pages';

const routes: Routes = [
  {
    path: 'candidates',
    component: AdminPageComponent
  },
  {
  path:'login',
  component: LoginPageComponent
  },
  {
    path: 'success',
    component: SuccessPageComponent
  },
  {
    path: '',
    component: FormPageComponent
  },
  {
    path: '**',
    component: FormPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
