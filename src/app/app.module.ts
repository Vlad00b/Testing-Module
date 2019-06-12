import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';
import {AppComponent} from './app.component';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {ModalWindowComponent} from './layouts/admin-layout/template-tasks/modal-window/modal-window.component';
import {TemplateTaskComponent} from './layouts/admin-layout/template-tasks/template-task.component';
import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule
} from '@angular/material';
import {CountService} from './services/count.service';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatRippleModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatSelectModule,
        MatDialogModule,
        MatToolbarModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        TemplateTaskComponent,
        ModalWindowComponent
    ],
    entryComponents: [
        ModalWindowComponent
    ],
    providers: [CountService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
