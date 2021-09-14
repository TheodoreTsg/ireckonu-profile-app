import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { QuickFactsStatusComponent } from './components/quick-facts-status/quick-facts-status.component';
import {MatListModule} from '@angular/material/list';
import { QuickFactsTopComponent } from './components/quick-facts-top/quick-facts-top.component';
import { QuickFactsScoreComponent } from './components/quick-facts-score/quick-facts-score.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { QuickFactsOtherComponent } from './components/quick-facts-other/quick-facts-other.component';
import { DetailPipePipe } from './pipes/detail-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    ProfileDetailsComponent,
    QuickFactsStatusComponent,
    QuickFactsTopComponent,
    QuickFactsScoreComponent,
    QuickFactsOtherComponent,
    DetailPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatTabsModule,
    MatDividerModule,
    MatListModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
