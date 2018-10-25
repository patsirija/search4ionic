import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PlacePage } from '../place/place';

/**
 * Generated class for the EprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-eprofile',
  templateUrl: 'eprofile.html',
})
export class EprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  place(){
    this.navCtrl.push(PlacePage)
  }

}
