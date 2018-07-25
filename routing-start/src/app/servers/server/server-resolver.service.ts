import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from "../../../../node_modules/@angular/router";
import { Observable } from "../../../../node_modules/rxjs";
import { ServersService } from "../servers.service";
import { Injectable } from "../../../../node_modules/@angular/core";

interface Server {
    id: number;
    name: string;
    status: string;
}

@Injectable()
export class ServiceResolver implements Resolve<Server> {
    constructor(private serverService: ServersService) {

    }
    resolve(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serverService.getServer(+route.params['id']);
    }
}