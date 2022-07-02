import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 5) return null;
    const filterJoven = [];
    for (const joven of value) {
      if (
        joven.cedula.toLowerCase() === arg.toLowerCase() ||
        joven.nombre.toLowerCase() === arg.toLowerCase()
      ) {
        filterJoven.push(joven);
      }
    }

    return filterJoven;
  }
}
