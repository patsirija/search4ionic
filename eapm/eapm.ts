import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacePage } from '../place/place';

/**
 * Generated class for the EapmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eapm',
  templateUrl: 'eapm.html',
})
export class EapmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register(){
    this.navCtrl.push(PlacePage)
  }
}
