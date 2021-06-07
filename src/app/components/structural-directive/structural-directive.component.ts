import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {

  public username :string = 'Tran Xuan Quyet';

  public isOn : boolean = true;

  public age : number = 0;

  public isMature : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(){
    this.isOn = !this.isOn;
  }

}
