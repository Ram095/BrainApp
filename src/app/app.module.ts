import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesNoOptionComponent } from './yes-no-option/yes-no-option.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectTouristPlaceComponent } from './select-tourist-place/select-tourist-place.component';
import { FamilyMembersComponent } from './family-members/family-members.component';

@NgModule({
  declarations: [
    AppComponent,
    YesNoOptionComponent,
    DashboardComponent,
    SelectTouristPlaceComponent,
    FamilyMembersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
