import { Pipe, PipeTransform } from '@angular/core';
import {Accident} from '../interfaces/accident.interface';

@Pipe({
  name: 'isTreated'
})
export class IsTreatedPipe implements PipeTransform {

  transform(accidents: Accident[] = [], isTreated: boolean): any {
    return accidents.filter(val => val.isTreated === isTreated);
  }

}
