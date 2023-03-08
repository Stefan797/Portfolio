import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbovethefoldComponent } from './abovethefold/abovethefold.component';
import { ContentComponent } from './content/content.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent},
  // { path: '**', component: ContentComponent},
  { path: 'imprint', component: ImprintComponent},
  { path: 'data-protection', component: DataProtectionComponent},
  // { path: 'success', component: SuccessmailsiteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
