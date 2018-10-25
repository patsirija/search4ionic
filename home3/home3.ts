import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacePage  } from '../place/place';
import { SearchPage } from '../search/search';
import { InsertapmPage } from '../insertapm/insertapm';
import { DdepartmentPage } from '../ddepartment/ddepartment';
import { HomePage } from '../home/home';
import { Home2Page } from '../home2/home2';
/**
 * Generated class for the Home3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home3',
  templateUrl: 'home3.html',
})
export class Home3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register(){
    this.navCtrl.push(PlacePage)
  }
  insertapm(){
    this.navCtrl.push(InsertapmPage)
  }
  search(){
    this.navCtrl.push(SearchPage)
  }
  ddepartment(){
    this.navCtrl.push(DdepartmentPage)
  }
  home(){
    this.navCtrl.push(HomePage)
  }
  home2(){
    this.navCtrl.push(Home2Page)
  }
}
