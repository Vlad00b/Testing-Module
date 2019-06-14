import {Injectable} from '@angular/core';

Injectable();

export class CountService {
    testStatistic: any = [];
    constructor() {
    }

    dataTest(counter) {
        let summ: any = {
            count: counter
        };
        if(counter <= 4){
            summ.value = 'Незадовільно ("2")';
        } else if(counter === 5){
            summ.value = 'Незадовільно з можливістю перездачі ("2")';
        } else if (counter >= 6 && counter <= 7 ){
            summ.value = 'Задовільно ("3")';
        } else if (counter === 8 || counter === 9){
            summ.value = 'Добре ("4")';
        } else if (counter === 10 ){
            summ.value = 'Відмінно ("5")';
        }
        return summ;
    }

    setResultTest(test){
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

        if (this.testStatistic == null){
            this.testStatistic = [];
        }
        this.testStatistic.push(statistic);
        console.log(this.testStatistic);
        localStorage.setItem('tests', JSON.stringify(this.testStatistic));
    }
}
