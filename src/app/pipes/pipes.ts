import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'filter'})

export class KeysPipe implements PipeTransform {
  transform(filter: any): any {
      console.log(filter)
    }
} 
