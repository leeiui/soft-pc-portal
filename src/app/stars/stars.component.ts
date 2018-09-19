import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

  private stars: boolean[];
  @Input()
  private rating: number = 0;
  @Input()
  private readonly: boolean = true;
  @Output()
  private ratingChange:EventEmitter<number>=new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.stars = [];
    for(let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  clickStar(index:number) {
    if(!this.readonly) {
    this.rating=index+1;

    this.ngOnInit();

    this.ratingChange.emit(this.rating);
    }
  }

  ngOnChanges() {
    this.stars = [];
    for(let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
    console.log("-->" +　this.stars);
  }

}
