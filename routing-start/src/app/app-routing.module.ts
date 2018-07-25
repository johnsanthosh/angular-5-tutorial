import { NgModule } from "../../node_modules/@angular/core";
import { Routes, RouterModule } from "../../node_modules/@angular/router";
import { HomeComponent } from "./home/home.component";
import { UsersComponent } from "./users/users.component";
import { ServersComponent } from "./servers/servers.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UserComponent } from "./users/user/user.component";
import { ServerComponent } from './servers/server/server.component';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivete-guard.service';
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServiceResolver } from "./servers/server/server-resolver.service";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent, children: [{ path: ':id/:name', component: UserComponent }] },
    {
        path: 'servers',
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        children: [{ path: ':id', component: ServerComponent, resolve: { server: ServiceResolver } },
        { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }]
    },
    /* { path: 'not-found', component: PageNotFoundComponent }, */
    { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not Found.' } },
    { path: '**', redirectTo: '/not-found' }
];

@NgModule({
    imports: [
        /* RouterModule.forRoot(appRoutes, { useHash: true })], */
        RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}