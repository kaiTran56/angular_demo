import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  public city: string[] = ['HCM', 'HN', 'ND', 'HP'];

  public phone: any[] = [
    {
      id: 1,
      name: 'Iphone-1',
      price: 10000000
    }
  ];

  public phoneTemp : any[] =[
    {
      id: 1,
      name: 'Iphone-X',
      price: 11000000
    }, {
      id: 2,
      name: 'Iphone-2',
      price: 11000000
    }, {
      id: 3,
      name: 'Iphone-3',
      price: 12000000
    }, {
      id: 4,
      name: 'Iphone-4',
      price: 13000000
    }, {
      id: 5,
      name: 'Iphone-5',
      price: 14000000
    }
  ];

  public check : number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onLoadData(){
    this.phone = this.phoneTemp;
  }

  myTrackByfunction(index: any, item: any){
    return item.id;
  }

}
