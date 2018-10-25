import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../search/search';
import { DdepartmentPage } from '../ddepartment/ddepartment';
import { EprofilePage } from '../eprofile/eprofile';
import { EapmPage } from '../eapm/eapm';
/**
 * Generated class for the PlacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  search(){
    this.navCtrl.push(SearchPage)
  }
  ddepartment(){
    this.navCtrl.push(DdepartmentPage)
  }
  eprofile(){
    this.navCtrl.push(EprofilePage)
  }
  eapm(){
    this.navCtrl.push(EapmPage)
  }
  place(){
    this.navCtrl.push(PlacePage)
  }
}
