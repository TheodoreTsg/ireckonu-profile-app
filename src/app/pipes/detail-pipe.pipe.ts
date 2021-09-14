import { Pipe, PipeTransform } from '@angular/core';
import {Profile} from '../shared/models';

@Pipe({
  name: 'detailPipe'
})
export class DetailPipePipe implements PipeTransform {

  transform(profile: Profile, param: string): string {
    let detailMap = new Map(Object.entries(profile));
    let detail = detailMap.get(param);
    if (detail === '' || detail === null || detail === undefined) {
      detail = '-';
    }
    return detail.toString();
  }
}
