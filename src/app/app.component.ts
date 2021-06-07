import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isMarried : boolean = true;

  public age : number = 18;

  public txtUsername: string ='';

  public txtPhone: string ='';

  onGetPhone(value: string){
    this.txtPhone = value;
  }
  onGetUsername(value : string){
    this.txtUsername = value;
  }

  public user : any[] =[
      {
        id: 1,
        name: 'Tran Quyet',
        address: 'Hanoi'
      },
      {
        id: 2,
        name: 'Tran Quyet 1',
        address: 'Hanoi'
      },
      {
        id: 3,
        name: 'Tran Quyet 2',
        address: 'Hanoi'
      },
      {
        id: 4,
        name: 'Tran Quyet 3' ,
        address: 'Hanoi'
      }
  ];
  
  title = 'lesson1';


}
