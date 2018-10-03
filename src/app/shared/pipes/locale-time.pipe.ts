import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localeTime'
})
export class LocaleTimePipe implements PipeTransform {

  transform(value: string): string {
    return new Date(value).toLocaleString();
  }

}
