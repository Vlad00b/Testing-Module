import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {CountService} from "../../../../services/count.service";

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class TestGuard implements CanDeactivate<ComponentCanDeactivate> {

    constructor(public count: CountService) {
    }

    canDeactivate(component: ComponentCanDeactivate,
                  currentRoute: ActivatedRouteSnapshot,
                  currentState: RouterStateSnapshot): Observable<boolean> | boolean {
        if (!this.count.next) {
            return confirm('Дані проходження тесту не збережуться. Ви дійсно хочете вийти?');
        } else return true;
    }
}
