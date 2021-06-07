import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'view-to-component',
  templateUrl: './view-to-component.component.html',
  styleUrls: ['./view-to-component.component.css']
})
export class ViewToComponentComponent implements OnInit {

  public tempNumber : number = 0;

  public username : string = 'Tran Quyet';

  public key : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClickMe(){
    alert('Hello World!');
  }

  showInfor(event : any){
    alert(event.target.innerText);
  }

  onIncrease(){
    return this.tempNumber++;
  }
  onDecrease(){
    return this.tempNumber--;
  }

  onShowKey(event: any){
    this.key = event.target.value;
  }

  onShowKeyEnter(event : any){
    this.key = event.target.value;
  }

}
