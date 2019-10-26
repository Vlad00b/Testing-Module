import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AdminLayoutRoutes} from './admin-layout.routing';
import {TestsComponent} from './tests/tests.component';
import {UserProfileComponent} from './user-profile/user-profile.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule

} from '@angular/material';
import {TableListComponent} from './table-list/table-list.component';
import {TestGuard} from "./template-tasks/guard/test.guard";

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
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule
    ],
    declarations: [
        TestsComponent,
        UserProfileComponent,
        TableListComponent,
    ],

    providers: []
})

export class AdminLayoutModule {
}
