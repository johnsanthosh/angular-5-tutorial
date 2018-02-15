import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() ServerCreated = new EventEmitter<{ name: string, content: string }>();
  @Output() BlueprintCreated = new EventEmitter<{ name: string, content: string }>();

  @ViewChild('serverContentInput') newServerContent: ElementRef;
  /*newServerName = '';*/

  /*newServerContent = '';*/

  constructor() {
  }

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.ServerCreated.emit({
      name: serverNameInput.value,
      content: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.BlueprintCreated.emit({
      name: serverNameInput.value,
      content: this.newServerContent.nativeElement.value
    });
  }

}
