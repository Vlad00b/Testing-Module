import { Injectable } from '@angular/core';

import { Resolve } from '@angular/router';

import { ActivatedRouteSnapshot } from '@angular/router';
import {TestsService} from './tests.service';

@Injectable()
export class TemplateResolveService implements Resolve<any> {
    constructor(private testService: TestsService) {}

    resolve(route: ActivatedRouteSnapshot) {
        return this.testService.getTest(route.params['id']);
    }
}