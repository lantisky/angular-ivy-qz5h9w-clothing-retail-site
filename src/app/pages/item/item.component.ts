import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  contentLoaded = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.contentLoaded = true;
    }, 4000);
  }
}
