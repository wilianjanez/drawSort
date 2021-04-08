import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-sort',
  templateUrl: './draw-sort.component.html',
  styleUrls: ['./draw-sort.component.css']
})
export class DrawSortComponent implements OnInit {
  datas: [string];
  newArray: [string];
  data: any;
  drawn: any;

  constructor() { 
    this.datas = [''];
    this.newArray = [''];
  }

  ngOnInit(): void {

  }

  addValue(): void {
    if (this.data.length > 0) {
      this.datas.push(this.data);
      this.data = '';
    }
  }

  draw(): void {
    let index = Math.floor(Math.random() * this.datas.length);
    let value = this.datas[index];
    this.drawn = value;
  }

  rank(): void {
    this.datas = this.datas.sort(function (a, b){ 
      return Math.floor(Math.random() * 10);
    });    
    this.datas = this.ranking(this.datas);

    console.log('foi!');
  }

  ranking(values = ['']) {
    this.newArray = [''];
    let number = Math.floor(Math.random() * values.length);
    let count = 1;
    this.newArray.push(values[number]);

    while (count < values.length - 1) {
        const newNumber = Math.floor(Math.random() * values.length);
        if (!this.newArray.includes(values[newNumber])) {
            count++;
            number = newNumber;
            this.newArray.push(values[number]);
        }
    }

    return this.newArray;
  }
}
