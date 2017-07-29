import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AccountComponent } from './account/account.component'
import { LoginComponent } from './account/login/login.account.component'

export const routes: Routes = [
    { path: '', component: AccountComponent },
    { path: 'login', component: AccountComponent },
    { path: 'register', component: AccountComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
