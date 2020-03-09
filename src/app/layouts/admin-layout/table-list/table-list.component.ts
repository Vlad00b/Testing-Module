import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-table-list',
    templateUrl: './table-list.component.html',
    styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

    statistic: any = [];
    value: any;

    constructor() {
    }

    ngOnInit() {
        if (JSON.parse(localStorage.getItem('tests'))) {
            this.statistic = JSON.parse(localStorage.getItem('tests'));
            this.statistic.forEach((item: any, i: number) => {
                item.userAnswer.forEach((ans: any, j: number) => {
                    if (j < 5) {
                        item.nameTest[0].userAnswer.push(ans);
                        item.nameTest[0].rightAnswer.push(item.rightAnswer[j]);
                    } else if (j < 10) {
                        item.nameTest[1].userAnswer.push(ans);
                        item.nameTest[1].rightAnswer.push(item.rightAnswer[j]);
                    } else {
                        item.nameTest[2].userAnswer.push(ans);
                        item.nameTest[2].rightAnswer.push(item.rightAnswer[j]);
                    }
                })
            });
            console.log(this.statistic);
        }
    }

}
