import { Component } from '@angular/core';
import { ViewChild } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTut';
  name : string = "Harsha";
  d : string = new Date().toLocaleTimeString();
  x : number = 1;

  test() {
    return this.x;
  }
  timeId = setInterval(()=>{
    this.d = new Date().toLocaleTimeString();
  },1000)

  path : string = "../assets/image.jpg";
  customClass : string = "special c2";
  s3 : string = "vk";

  isDisabled : boolean = false;

  isHidden : boolean = true;

  isActive : boolean = true;

  applyC1 : boolean = true;

  applyC3 : boolean = true;

  cvar : string = "blue";

  myStyle : object = {
    color : 'white',
    background : "grey",
    border : '5px solid yellow'
  }

  counter : number = 0;

  inc (){
    this.counter = this.counter+1;
  }

  dec (){
    this.counter = this.counter-1;
  }

  yourname : string = "";
  handleInp(e:any){
    this.yourname = e.target.value;
  }


  city : string = "Hyderabad";//two way binding

  updateCity() {
    this.city = "Banglore"
  }

  show : boolean = true;

  movies = ["RRR","Bheemla Nayak","Athadu","Bahubali"];

  showHead : boolean = true;

  data : any = ["RRR","Bheemla Nayak"];
  // data : any = "";

  nums : any = [1,2,3,4,5,6];

  nums1 : any = ['a','b','c','d'];

  mobiles = [
    {
      "id" : 2,
      "name" : "One Plaus Nord",
      "price" : 25000,
      "ram" : "8gb",
      "storage" : "128gb"
    },

    {
      "id" : 1,
      "name" : "Apple 13",
      "price" : 22000,
      "ram" : "4gb",
      "storage" : "128gb"
    }
  ]

  str : string = "Error";

  num1 : number = 2;
  num2 : number = 3;

  op : string = '+';


  child : string = "harsha sree kancharla";
  salary : number = 167000;

  person1 = {
    'name' : "xyz",
    'age' : 26,
    'salary' : 68000
  }

  dob = new Date();

  num : number = 0.98;

  company : string = "Microsoft";

  wish : string =  "Hello Good Morning";

  identity = {
    "name" : "chinni",
    "gender" : "f"
  }

  email : string = "";

  updateEmail(ip : string){
    this.email = ip;
  }

  childTopicName : string = "This is for Parent to child Access String";

  data1 : string = "This is another one from P to C";

  parr = [10,20,30,40,50,60];

  parr2 = [20,40,60,80,100];

  cdata : string = "";


  @ViewChild(HeaderComponent) headerChild : any;

  data4: string | undefined;
  test2 () {
    this.data4 = this.headerChild.passToParent2();
  }

}
