import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorSignInComponent } from './openhouse/pages/visitor-sign-in/visitor-sign-in.componenet';

const routes: Routes = [
  {
    component: VisitorSignInComponent,
    data: { displayName: 'SignIn' },
    path: 'SignIn',
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
