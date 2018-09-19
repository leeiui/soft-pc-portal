import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterField: string,keyword:string): any {
    if(!filterField || !keyword) {

      return list;
    }
    return list.filter(
      item=>{
        let fieldValue = item[filterField];

        console.log("关键字：" + keyword);
        console.log("搜索字段：" + filterField);

        return fieldValue.indexOf(keyword) >=0;
      }
    );
  }

}
