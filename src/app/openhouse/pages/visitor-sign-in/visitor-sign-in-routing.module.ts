import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisitorSignInComponent } from './visitor-sign-in.component';

const routes: Routes = [{ path: '', component: VisitorSignInComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorSignInRoutingModule { }
