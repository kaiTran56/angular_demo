import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  private _name: string = '';
  public username: string = '';
  public phone: string = '';

  @Input("married") married: boolean = false;
  @Input("age") age: number = 0;


  @Output('username') onHandleUsername = new EventEmitter<string>();
  @Output('phone') onHandlePhone = new EventEmitter<string>();
  onSubmitInfor() {
    this.onHandleUsername.emit(this.username);
    this.onHandlePhone.emit(this.phone);
  }

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  set name(name: string) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

}
