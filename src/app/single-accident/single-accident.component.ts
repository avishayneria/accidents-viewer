import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccidentService} from '../shared/services/accident.service';
import {Subscription} from 'rxjs/internal/Subscription';

@Component({
  selector: 'single-accident',
  templateUrl: './single-accident.component.html',
  styleUrls: ['./single-accident.component.scss']
})
export class SingleAccidentComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = []; // to avoid memory leak
  public accident: any;
  constructor(private accidentService: AccidentService) { }

  ngOnInit() {
    this.subscriptions.push(
      this.accidentService.accident$.subscribe(accident => {
        this.accident = accident;
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscriber => {
      subscriber.unsubscribe();
    });
  }
}
