import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AboutPage } from "../about/about";

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('elementState', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent',   style({
        opacity: 0
      })),
      transition('opaque => transparent', animate('4000ms ease-in')),
      transition('transparent => opaque', animate('4000ms ease-out'))
    ])
  ]
})
export class HomePage {
  state = 'transparent';

  constructor(public navCtrl: NavController) {

  }

  makeOpaque() {
    this.state = 'opaque';
  }

  makeTransparent() {
    this.state = 'transparent';
  }

  goToAbout() {
    const animationsOptions = {
      animation: 'fade-transition',
      duration: 1000
    }
    this.navCtrl.push(AboutPage, {}, animationsOptions);
  }
}
