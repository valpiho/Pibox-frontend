import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styleUrls: ['./group-create.component.scss']
})
export class GroupCreateComponent implements OnInit {
  
  public showLoading: boolean;

  constructor() {}
  

  ngOnInit(): void {
  }

  onCreate(value: any) {
    
  }
}
