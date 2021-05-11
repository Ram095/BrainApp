import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FamilyMembersComponent } from './family-members/family-members.component';
import { SelectTouristPlaceComponent } from './select-tourist-place/select-tourist-place.component';
import { SoundIdentifyComponent } from './sound-identify/sound-identify.component';
import { YesNoOptionComponent } from './yes-no-option/yes-no-option.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'animals', component: YesNoOptionComponent},
  {path:'tourist-place', component: SelectTouristPlaceComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'family-members', component: FamilyMembersComponent},
  {path:'currency', component: CurrencyComponent},
  {path:'sound', component: SoundIdentifyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
