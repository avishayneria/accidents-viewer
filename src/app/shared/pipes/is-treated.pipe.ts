import { Pipe, PipeTransform } from '@angular/core';
import {Accident} from "../interfaces/accident.interface";

@Pipe({
  name: 'isTreated'
})
export class IsTreatedPipe implements PipeTransform {

  transform(value: Accident[] = [], args?: boolean): any {
    return value.filter(val => val.isTreated === args).sort((a, b) => {
      return new Date(a.EventTime).getTime() - new Date(b.EventTime).getTime()
    });
  }

}
