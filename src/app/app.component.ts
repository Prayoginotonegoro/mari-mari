import { Component, OnInit } from '@angular/core';
import { SwUpdate } from "@angular/service-worker";
import { Route } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mari-id';
  update: boolean = false;

  constructor(updates: SwUpdate) {
    updates.available.subscribe(event => {
      this.update = true;
    })
  }

  ngOnInit() {
    
  }
}
