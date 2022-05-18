import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  @Input() field : any
  @Input() key : string
  constructor() { 
    this.key = ''
  }

  ngOnInit(): void {
  }

}
