import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-to-view',
  templateUrl: './component-to-view.component.html',
  styleUrls: ['./component-to-view.component.css']
})
export class ComponentToViewComponent implements OnInit {

  public name: string = "tran quyet";

  public age: number = 22;

  public isMan: boolean = true;

  public imageAddress: string = "https://cellphones.com.vn/media/catalog/product/a/p/apple-iphone-xr-64-gb-chinh-hang-vn_3_.jpg";

  public tbWidth = "500";

  public isBoder  = false;

  public user = {
    name: "tran quyet",
    age: 22,
    isMan: true
  }

  constructor() { }

  ngOnInit(): void {
  }

  showInfor() {
    return `${this.user.name}`;
  }


}
