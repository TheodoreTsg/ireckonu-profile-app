import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import {Profile} from "./shared/models";
import {QuickFactsStatusComponent} from "./components/quick-facts-status/quick-facts-status.component";

const routes: Routes = [
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'search', component: SearchPageComponent },
  { path: 'details/:id', component: ProfileDetailsComponent, data: { myData: 'Test'}},
  { path: 'facts', component: QuickFactsStatusComponent },
  // {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
