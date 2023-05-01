import { Component, OnInit } from '@angular/core';
import {
  faBell,
  faCrow,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isOpen = false;
  isOpenBody = false;

  faBell = faBell;
  faInfoCircle = faInfoCircle;
  faClose = faCrow;

  constructor() {}

  ngOnInit(): void {}

  toggleIsOpen() {
    this.isOpen = !this.isOpen;
  }
}
