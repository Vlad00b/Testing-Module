import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {TemplateTaskComponent} from './layouts/admin-layout/template-tasks/template-task.component';
import {TemplateResolveService} from './services/template-resolve.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'tests',
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }]
    }, {
        path: 'template/:id',
        component: TemplateTaskComponent,
        resolve: {data: TemplateResolveService}
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [],
})
export class AppRoutingModule {
}
