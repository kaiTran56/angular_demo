import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-test',
  templateUrl: './pipe-test.component.html',
  styleUrls: ['./pipe-test.component.css']
})
export class PipeTestComponent implements OnInit {

  public content: string = `‘The best of both worlds’ – means you can enjoy two different opportunities at the same time.
“By working part-time and looking after her kids two days a week she managed to get the best of both worlds.”`;

  public testNumber : number = 123.456;

  public arr : any[] = ['a','b','c','d',1,2,3];

  public products: any[]=[
    {
      id: 1,
      name: 'Iphone-1',
      status: false
    },
    {
      id: 2,
      name: 'Sony-2',
      status: true
    },
    {
      id: 3,
      name: 'Xaomi-3',
      status: false
    },
    {
      id: 4,
      name: 'Haiwei-4',
      status: true
    },
    {
      id: 5,
      name: 'Samsung-5',
      status: false
    },
    {
      id: 6,
      name: 'Iphone-6',
      status: true
    }
  ];

  public idFilter : string = '';

  public nameFilter: string ='';

  public statusFilter: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
