import { Component, OnInit } from '@angular/core';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import * as feather from 'feather-icons';



@Component({
  selector: 'app-asidebar',
  templateUrl: './asidebar.component.html',
  styleUrls: ['./asidebar.component.scss']
})
export class AsidebarComponent implements OnInit {

  config: PerfectScrollbarConfigInterface = {
    suppressScrollX: true
  };

  collapSed = false;

  constructor() { }

  ngOnInit(): void {

    
  }

  onShowHideMenu() {

    this.collapSed = !this.collapSed;
    feather.replace();
    // $('#bodyAdmin').className = this.collapSed 
    // ? 'pace-done vertical-layout vertical-menu-modern content-left-sidebar navbar-floating footer-static menu-collapsed'
    // : 'vertical-layout vertical-menu-modern  navbar-floating footer-static';
    document.getElementById('bodyAdmin').className = this.collapSed 
    ? 'pace-done vertical-layout vertical-menu-modern content-left-sidebar navbar-floating footer-static menu-collapsed'
    : 'vertical-layout vertical-menu-modern  navbar-floating footer-static';

    // vertical-layout vertical-menu-modern  navbar-floating footer-static
    // pace-done vertical-layout vertical-menu-modern content-left-sidebar navbar-floating footer-static menu-collapsed
  }

}
