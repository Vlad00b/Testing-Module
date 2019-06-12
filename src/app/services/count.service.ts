import {Injectable} from '@angular/core';

Injectable()

export class CountService {
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
}
