import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BirthdayComponent } from './birthday/birthday.component';
import { CurrencyComponent } from './currency/currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FamilyMembersComponent } from './family-members/family-members.component';
import { MathsComponent } from './maths/maths.component';
import { SelectTouristPlaceComponent } from './select-tourist-place/select-tourist-place.component';
import { ShlokasComponent } from './shlokas/shlokas.component';
import { SoundIdentifyComponent } from './sound-identify/sound-identify.component';
import { YesNoOptionComponent } from './yes-no-option/yes-no-option.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path:'animals', component: YesNoOptionComponent},
  {path:'tourist-place', component: SelectTouristPlaceComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'family-members', component: FamilyMembersComponent},
  {path:'currency', component: CurrencyComponent},
  {path:'sound', component: SoundIdentifyComponent},
  {path:'maths', component: MathsComponent},
  {path:'shlokas', component: ShlokasComponent},
  {path:'birthday', component: BirthdayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
