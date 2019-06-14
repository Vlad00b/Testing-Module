import {Injectable} from '@angular/core';
import {APP_TESTS} from '../../assets/allTests/test.list';

Injectable();

export class TestsService {
    test: any = {};
    constructor() {
    }

    getTest(id){
        APP_TESTS.forEach(item => {
            if(+id === item.id){
              this.test = item;
          }
      });
        return this.test;
    }
}
