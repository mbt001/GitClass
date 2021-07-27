import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dataypes',
  templateUrl: './dataypes.component.html',
  styleUrls: ['./dataypes.component.css']
})
export class DataypesComponent implements OnInit {
  //declaring variables
  name:string="SRI";
  age:number;
  hobbies:string[];
  marks:Array<number>;
  Istrue:boolean;
  tupleval:[string,number,boolean];
  dynamicvalue:any;
  student:any;
  picture="assets/image/doll.jpeg"

  constructor() {
    this.age=30;
    this.hobbies=["Playing","Singing"];
    this.marks=[90,78,98];
    this.Istrue=false;
    this.tupleval=["Pune",1200,true];
    this.dynamicvalue=89;
    this.student={fathername:"Raj",Address:"TNB road,chennai-42"}
   }
   employee:any[]=[{"name":"sbid","age":"20","dept":"HR",},
   {"name":"sbTET","age":"23","dept":"HR",} ,
   {"name":"Kbid","age":"24","dept":"H6",},
   {"name":"Ubid","age":"26","dept":"H3",}
  ];

  ngOnInit(): void {
  }

}
