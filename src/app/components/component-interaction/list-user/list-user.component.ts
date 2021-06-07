import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  @Input('user') user : any[] = [];

  @Input('txtPhone') txtPhone: string ='';

  @Input('txtUsername') txtUsername: string='';

  constructor() { }

  ngOnInit(): void {
  }

}
