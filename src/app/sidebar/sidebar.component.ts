import { Component, OnInit } from '@angular/core';
import * as M from "../../assets/js/materialize.min.js";
import * as $ from "jquery";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      M.Sidenav.init($('.sidenav') ,{
        
      });
    });
  }

}
