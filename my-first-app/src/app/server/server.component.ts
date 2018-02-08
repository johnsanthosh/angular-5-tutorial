import {Component} from '@angular/core';

@Component({
  templateUrl: './server.component.html',
  selector: 'app-server'
})
export class ServerComponent {
  serverID = 10;
  serverStatus = 'Offline';

  getServerStatus() {
    return this.serverStatus;
  }

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return (this.serverStatus === 'online') ? 'green' : 'red';
  }
}
