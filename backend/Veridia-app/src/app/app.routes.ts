import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { AccountsRegistrationComponent } from './pages/account-registration/account-registration.component';
import { AccounthistoryComponent } from './pages/account-history/account-history.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'account-registration', component: AccountsRegistrationComponent },
  { path: 'account-history', component: AccounthistoryComponent },
  { path: 'register', component: RegisterComponent },   
  { path: '**', redirectTo: 'login' },
  
];