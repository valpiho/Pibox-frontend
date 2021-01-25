import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restore-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  showLoading: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onRestore(value: any) {

  }
}
