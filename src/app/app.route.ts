import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AuthGuard } from './services/auth/auth.guard';

import { AccountComponent } from './account/account.component'
import { BucketlistComponent } from './bucketlist/bucketlist.component'
import { BucketlistSearchComponent } from "./bucketlist-search/bucketlist-search.component";

export const routes: Routes = [
    { 
        path: '',
        redirectTo: 'bucketlists',
        pathMatch: 'full'
    },
    { 
        path: 'login', 
        component: AccountComponent
    },
    { path: 'register', component: AccountComponent },
    { 
        path: 'bucketlists', 
        component: BucketlistComponent,
        canActivate: [ AuthGuard ]
    },
    {
        path: 'search',
        component: BucketlistSearchComponent,
        canActivate: [ AuthGuard ]
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
