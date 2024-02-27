import { Pipe, PipeTransform } from '@angular/core';
import { Iplayers } from '../model/players';

@Pipe({
  name: 'playerFilter'
})
export class PlayerFilterPipe implements PipeTransform {

  transform(value: Iplayers[], searchKey : string): Iplayers[] {
    let filteredArr : Iplayers[] = []
    if(!value){
      return []
    }
    if(!searchKey){
      return value
    }

    filteredArr = value.filter(player => {
      console.log(player);
      return player.team.toLowerCase().includes(searchKey.trim().toLowerCase())
    })


    return filteredArr
  }

 }



