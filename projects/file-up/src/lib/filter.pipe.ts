import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    
  }

  // transform(values:any, filter:string):any{
  //   if (!filter || filter.length === 0) {
  //     return values;
  //   }

  //   if (values.length === 0) {
  //     return values;
  //   }

  //   return values.filter((value:any) => {
  //     const nameFound =
  //       value.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
  //     const capitalFound =
  //       value.capital.toLowerCase().indexOf(filter.toLowerCase()) !== -1;

  //     if (nameFound || capitalFound) {
  //       return value;
  //     }
  //   });
  // }
  

}
