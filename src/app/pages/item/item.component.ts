import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
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
