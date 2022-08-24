import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'SignIn',
    data: { displayName: 'SignIn' },
    loadChildren: () => import('./openhouse/pages/visitor-sign-in/visitor-sign-in.module').then(m => m.VisitorSignInModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
