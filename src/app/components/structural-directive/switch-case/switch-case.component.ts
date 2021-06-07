import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {

  public user : any[] = [
    {
      name : 'Kai',
      address : 'US'
    },
    {
      name : 'Tran',
      address : 'JP'
    },
    {
      name : 'Quyet',
      address : 'VN'
    },
    {
      name : 'Dung',
      address : 'VN'
    },
    {
      name : 'Rose',
      address : 'Kr'
    }
  ];

  public color : string = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
