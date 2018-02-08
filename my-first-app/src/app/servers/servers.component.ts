import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addServerStatus = false;
  serverCreated = false;
  message = 'A server was not created !';
  serverName = '';
  servers = ['Server 1'];

  constructor() {
    setTimeout(() => {
      this.addServerStatus = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onClickAddServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.message = 'A server was created with name ' + this.serverName;
  }

  onInputServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
