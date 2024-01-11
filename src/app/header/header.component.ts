import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() childTopicName : string | undefined;
  @Input() data1 : string | undefined;
  @Input() parr: number[] | undefined;


  @Output() customeve = new EventEmitter();

  test : string = "This came from Child (Header)"
  passToParent() {
    this.customeve.emit(this.test);
  }

  updateData (e : any) {
    this.test = e.value;
  }


  data2 : string = "From Child to Par by Template Ref Method";

  demo (){
    return "Hello";
  }

  data3 : string = "Child to Parent by view child!";
  
  passToParent2(){
    return this.data3;
  }

  constructor() {
    
  }
}
