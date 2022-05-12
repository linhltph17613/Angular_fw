import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {
  @Input() id : any;
  constructor() { }

  ngOnInit(): void {
  }

}
