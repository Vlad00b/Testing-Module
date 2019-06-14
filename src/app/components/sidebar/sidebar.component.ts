import {Component, OnInit} from '@angular/core';

declare interface RouteInfo {
    path: string,
    title: string,
    icon: string,
    class: string
}

export const ROUTES: RouteInfo[] = [
    {path: '/tests', title: 'Тести', icon: 'dashboard', class: ''},
    {path: '/user-profile', title: 'Профіль', icon: 'person', class: ''},
    {path: '/table-list', title: 'Статистика', icon: 'content_paste', class: ''},
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor(){
    }

    ngOnInit() {
        this.menuItems = ROUTES;
    }
}
