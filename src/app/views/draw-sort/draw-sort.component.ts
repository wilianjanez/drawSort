import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-sort',
  templateUrl: './draw-sort.component.html',
  styleUrls: ['./draw-sort.component.css']
})
export class DrawSortComponent implements OnInit {
  datas: [string];
  data: any;
  drawn: any;

  constructor() { 
    this.datas = [''];
  }

  ngOnInit(): void {
    this.datas = [''];
  }

  addValue(): void {
    this.datas.push(this.data);
    this.data = '';
  }

  draw(): void {
    let index = Math.floor(Math.random() * this.datas.length);
    let value = this.datas[index];
    this.drawn = value;
  }
}
