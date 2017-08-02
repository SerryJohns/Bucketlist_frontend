import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './services/auth/auth.guard';

import { AccountComponent } from './account/account.component'
import { BucketlistComponent } from './bucketlist/bucketlist.component'

export const routes: Routes = [
    { path: '', component: AccountComponent },
    { path: 'login', component: AccountComponent },
    { path: 'register', component: AccountComponent },
    { 
        path: 'bucketlist', 
        component: BucketlistComponent,
        canActivate: [ AuthGuard ]
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
