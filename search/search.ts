import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DdepartmentPage } from '../ddepartment/ddepartment';
import { EapmPage } from '../eapm/eapm';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ddepartment(){
    this.navCtrl.push(DdepartmentPage)
  }
  eapm(){
    this.navCtrl.push(EapmPage)
  }
  search(){
    this.navCtrl.push(SearchPage)
  }
}
