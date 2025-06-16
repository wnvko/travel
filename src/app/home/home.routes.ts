import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { text: 'Login' } },
      { path: 'sign-up', component: SignUpComponent, data: { text: 'Sign-Up' } },
      { path: 'reset-password', component: ResetPasswordComponent, data: { text: 'Reset-Password' } },
      { path: 'set-new-password', component: SetNewPasswordComponent, data: { text: 'Set-New-Password' } },
    ]
  },
];
