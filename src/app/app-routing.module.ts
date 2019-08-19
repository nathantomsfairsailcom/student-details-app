import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent, SuccessPageComponent } from './pages';

const routes: Routes = [
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
