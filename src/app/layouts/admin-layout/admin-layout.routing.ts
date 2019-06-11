import { Routes } from '@angular/router';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import {TestsComponent} from '../../tests/tests.component';
import {TemplateTaskComponent} from '../../template-tasks/template-task.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'tests',          component: TestsComponent},
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'template',       component: TemplateTaskComponent},

];
