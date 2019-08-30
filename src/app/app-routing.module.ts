import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent, SuccessPageComponent, LoginPageComponent } from './pages';

const routes: Routes = [
  {
    path: 'login',
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
