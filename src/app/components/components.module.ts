import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {FooterComponent} from './footer/footer.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    declarations: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent
    ],
    exports: [
        FooterComponent,
        SidebarComponent,
        NavbarComponent
    ]
})
export class ComponentsModule {
}
