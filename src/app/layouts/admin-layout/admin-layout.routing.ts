import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {TestsComponent} from './tests/tests.component';
import {TableListComponent} from './table-list/table-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'tests',          component: TestsComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
];
