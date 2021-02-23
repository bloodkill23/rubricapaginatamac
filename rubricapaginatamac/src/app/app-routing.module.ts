import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountPageComponent } from './count-page/count-page.component';
import { ErrorMessagePageComponent } from './error-message-page/error-message-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SceltaComponent } from './scelta/scelta.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  { path: 'MainPage', component: MainPageComponent },
  { path: 'LoginPage', component: LoginPageComponent },
  { path: 'ErrorMessagePage', component: ErrorMessagePageComponent },
  { path: 'SearchPage', component: SearchPageComponent },
  { path: 'CountPage', component: CountPageComponent },
  {path:'scelta', component: SceltaComponent},
  { path: '', redirectTo: '/LoginPage', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}