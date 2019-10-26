import {Injectable} from '@angular/core';

Injectable();

export class CountService {
    testStatistic: any = [];
    next: boolean = false;

    constructor() {
    }

    dataTest(counter, length) {
        let summ: any = {
            count: counter
        };
        summ.value = Math.round((12 / length) * counter);
        return summ;
    }

    setResultTest(test) {
        console.log(test);
        let statistic = {
            id: test.id,
            evaluation: test.evaluation,
            userAnswer: test.userAnswer,
            rightAnswer: test.rightAnswer,
            nameTest: test.test,
            titleTest: test.title,
            value: test.value
        };
        this.testStatistic = JSON.parse(localStorage.getItem('tests'));
        console.log(this.testStatistic);

        if (this.testStatistic == null) {
            this.testStatistic = [];
        }
        this.testStatistic.push(statistic);
        console.log(this.testStatistic);
        localStorage.setItem('tests', JSON.stringify(this.testStatistic));
    }
}
