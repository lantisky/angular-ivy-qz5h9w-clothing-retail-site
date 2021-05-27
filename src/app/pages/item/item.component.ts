import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  itemSizeControl = new FormControl();
  itemSize?: string;
  constructor() {}
  ngOnInit() {}
}
