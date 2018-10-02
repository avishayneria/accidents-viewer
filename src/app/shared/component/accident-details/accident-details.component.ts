import {Component, Input} from '@angular/core';
import {Accident} from "../../interfaces/accident.interface";

@Component({
  selector: 'accident-details',
  templateUrl: './accident-details.component.html',
  styleUrls: ['./accident-details.component.scss']
})
export class AccidentDetailsComponent {
  @Input() data: Accident;
  public zoom: number = 14;

  constructor() { }

}
