import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {TestsComponent} from '../../tests/tests.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TableListComponent} from '../../table-list/table-list.component';
import {IconsComponent} from '../../icons/icons.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {TemplateTaskComponent} from '../../template-tasks/template-task.component';
import {ModalWindowComponent} from '../../template-tasks/modal-window/modal-window.component';


import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule
} from '@angular/material';
import {CountService} from '../../services/count.service';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule
    ],
    declarations: [
        TestsComponent,
        UserProfileComponent,
        TableListComponent,
        IconsComponent,
        NotificationsComponent,
        TemplateTaskComponent,
        ModalWindowComponent
    ],
    entryComponents: [
        ModalWindowComponent
    ],

    providers: [CountService]
})

export class AdminLayoutModule {
}
