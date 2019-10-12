import { Component, OnInit, OnChanges, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-discipler-card',
  templateUrl: './discipler-card.component.html',
  styleUrls: ['./discipler-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisciplerCardComponent implements OnInit, OnChanges {
  @Input() discipler;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.changeDetectorRef.detectChanges();
  }

}
