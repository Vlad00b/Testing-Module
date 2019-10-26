import {Component} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './tests.component.html',
    styleUrls: ['./tests.component.css']
})
export class TestsComponent {
    constructor() {
    }


    getClass(ev){
        console.log(ev);
        // let arrTest = document.querySelectorAll('.tab-pane');
        // arrTest.forEach(item => {
        //     if(item.className === 'tab-pane active show') {
        //         console.log(item.id);
        //         console.log(item);
        //     }
        // });
        // console.log(arrTest);
    }
}
