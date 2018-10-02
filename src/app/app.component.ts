import {Component, OnInit} from '@angular/core';
import {AccidentService} from "./shared/services/accident.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private accidentService: AccidentService) {}

  ngOnInit() {
    this.accidentService.getAccidents();
  }
}
