import { Injectable } from '../../node_modules/@angular/core';
import { Http, Headers, Response } from '../../node_modules/@angular/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from '../../node_modules/rxjs';

@Injectable()
export class ServerService {
    constructor(private http: Http) {

    }

    storeServers(servers: any[]) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        /* return this.http.post('https://udemy-ng-http-de35b.firebaseio.com/data.json',
            servers, { headers: headers }); */
        return this.http.put('https://udemy-ng-http-de35b.firebaseio.com/data.json',
            servers, { headers: headers });
    }

    getServers() {
        return this.http.get('https://udemy-ng-http-de35b.firebaseio.com/data.json')
            .pipe(map(
                (response: Response) => {
                    const data = response.json();
                    for (const server of data) {
                        server.name = 'FETCHED_' + server.name;
                    }
                    return data;
                }
            ))
            .pipe(catchError((error) => {
                console.log(error);
                return throwError('Something went wrong.');
            }));
    }

    getAppName() {
        return this.http.get('https://udemy-ng-http-de35b.firebaseio.com/appName.json').pipe(
            map(
                (response: Response) => {
                    return response.json();
                }
            )
        );
    }
}
