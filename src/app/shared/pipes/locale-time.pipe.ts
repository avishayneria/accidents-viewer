import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localeTime'
})
export class LocaleTimePipe implements PipeTransform {

  transform(value: string): any {
    return new Date(value).toLocaleString();
  }

}
