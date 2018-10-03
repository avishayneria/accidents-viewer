import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Accident} from '../interfaces/accident.interface';

@Injectable({
  providedIn: 'root'
})
export class AccidentService {
  private readonly url: string = 'http://18.220.30.250:5155/Test';
  private _accidents$: BehaviorSubject<Accident[]> = new BehaviorSubject<Accident[]>(null);
  private _accident$: BehaviorSubject<Accident> = new BehaviorSubject<any>(null);
  public accidents$: Observable<Accident[]> = this._accidents$.asObservable();
  public accident$: Observable<Accident> = this._accident$.asObservable();
  constructor(private http: HttpClient) { }

  getAccidents() {
   this.http.get(this.url).subscribe((res: any) => {
     if (res.Data) {
       this._accidents$.next(res.Data.sort((a, b) => {
         return new Date(a.EventTime).getTime() - new Date(b.EventTime).getTime();
       }));
     } else {
       this._accidents$.next([]);
     }

   }, err => {
     this._accidents$.next([]);
   });
  }

  setAccident(accident: Accident) {
    this._accident$.next(accident);
  }

  isValid(): boolean {
    return !!this._accident$.getValue();
  }
}
