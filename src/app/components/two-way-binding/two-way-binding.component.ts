import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {

  public title : string = "Two way binding !";

  public name : string = '';

  public gender : number = 0;

  public username : string = '';

  public isMale : number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
