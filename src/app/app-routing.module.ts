import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'SignIn',
    data: { displayName: 'SignIn' },
    loadChildren: () => import('./openhouse/pages/visitor-sign-in/visitor-sign-in.module').then(m => m.VisitorSignInModule)
  },
  {
    path: 'DynamicForm',
    data: { displayName: 'Dynamic Form' },
    loadChildren: () => import('./openhouse/pages/dynamic-form/dynamic-form.module').then(m => m.DynamicFormModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
