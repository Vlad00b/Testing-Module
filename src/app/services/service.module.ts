import {NgModule} from '@angular/core';
import {TestsService} from './tests.service';
import {TemplateResolveService} from './template-resolve.service';
import {CountService} from './count.service';

@NgModule({
    providers: [CountService,TestsService, TemplateResolveService]
})

export class ServiceModule {
}