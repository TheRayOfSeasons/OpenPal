import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-discipler-card',
  templateUrl: './discipler-card.component.html',
  styleUrls: ['./discipler-card.component.scss']
})
export class DisciplerCardComponent implements OnInit {
  @Input() discipler;

  constructor() { }

  ngOnInit() {
  }

}
