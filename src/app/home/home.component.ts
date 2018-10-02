import {Component, OnDestroy, OnInit} from '@angular/core';
import {AccidentService} from "../shared/services/accident.service";
import {Router} from "@angular/router";
import {Accident} from "../shared/interfaces/accident.interface";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  private subscriptions: Subscription[] = []; // to avoid memory leak
  public accidents: Accident[] = [];
  public accidentsHeaders: string[] = ['MDA', 'Event Time', 'Mechanism', 'Kinematic'];
  public loading: boolean = true;
  constructor(private accidentService: AccidentService, private router: Router) { }

  ngOnInit() {
    this.subscriptions.push(
      this.accidentService.accidents$.subscribe(accidents => {
        if (accidents) {
          this.accidents = accidents;
          this.loading = false;
        }
      }, err => {
        this.loading = false;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscriber => {
      subscriber.unsubscribe();
    });
  }

  public displayAccidentDetails(accident: Accident): void {
    this.accidentService.setAccident(accident);
    this.router.navigate(['singleAccident']);
  }
}
