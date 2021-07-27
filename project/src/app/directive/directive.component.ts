import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() { }
  employee:any[]=[{"name":"sbid","age":"20","dept":"HR",},
   {"name":"sbTET","age":"23","dept":"HR",} ,
   {"name":"Kbid","age":"24","dept":"Admin",},
   {"name":"Ubid","age":"26","dept":"H3",}
  ];
  ngOnInit(): void {
  }

}
