import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import {QuickFactsStatusComponent} from "./components/quick-facts-status/quick-facts-status.component";

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent },
  { path: 'details/:id', component: ProfileDetailsComponent},
  { path: 'facts', component: QuickFactsStatusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
