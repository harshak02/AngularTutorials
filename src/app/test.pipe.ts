import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   // transform(value: unknown, param1 : string , param2 : string): any {
  //   // console.log(value); shown in that web browser
  //   // console.log(args); shows param1 and param2
  //   return "Hello"+value;
  // }

  transform(p : any,wish : string): string {
    if(p.gender==="f"){
      return wish + " Miss " + p.name;
    } else {
      return wish + " Mr " + p.name;
    }
  }

}
