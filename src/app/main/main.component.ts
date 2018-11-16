import { Component, OnInit } from '@angular/core';
import * as M from "../../assets/js/materialize.min.js";
import * as $ from "jquery";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      M.Carousel.init($('.carousel.carousel-slider'), {
        fullWidth: true,
        indicators: true,
        duration: 100
      });

      M.toast({html: "Hello everyone"});
    });
  }

}
