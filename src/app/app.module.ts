import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YesNoOptionComponent } from './yes-no-option/yes-no-option.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectTouristPlaceComponent } from './select-tourist-place/select-tourist-place.component';
import { FamilyMembersComponent } from './family-members/family-members.component';
import {HttpClientModule} from '@angular/common/http';
import { CurrencyComponent } from './currency/currency.component';
import { MathsComponent } from './maths/maths.component';
import { SoundIdentifyComponent } from './sound-identify/sound-identify.component';
@NgModule({
  declarations: [
    AppComponent,
    YesNoOptionComponent,
    DashboardComponent,
    SelectTouristPlaceComponent,
    FamilyMembersComponent,
    CurrencyComponent,
    MathsComponent,
    SoundIdentifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
