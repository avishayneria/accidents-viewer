import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Accident} from '../../interfaces/accident.interface';

@Component({
  selector: 'accidents-list',
  templateUrl: './accidents-list.component.html',
  styleUrls: ['./accidents-list.component.scss']
})
export class AccidentsListComponent {

  @Input() headers: string[] = [];
  @Input() data: Accident[] = [];
  @Input() isTreated: boolean = false;
  @Output() itemClicked: EventEmitter<Accident> = new EventEmitter<Accident>();
  constructor() { }

  onItemClick(item: Accident): void {
    this.itemClicked.emit(item);
  }
}
