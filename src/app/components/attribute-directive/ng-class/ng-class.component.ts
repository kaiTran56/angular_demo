import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  public isSpecial : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onChange(){
    this.isSpecial = !this.isSpecial;
  }

  setChangeStyle(){
    return {
      'pd-10': this.isSpecial,
      'cl-red': this.isSpecial,
      'border-blue': this.isSpecial,
      'border-yellow': !this.isSpecial
    }
  }

}
