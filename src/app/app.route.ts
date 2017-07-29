import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import {AccountComponent } from './account/account.component'

export const routes: Routes = [
    { path: 'account', component: AccountComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
