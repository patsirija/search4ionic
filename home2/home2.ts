import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlacePage  } from '../place/place';
import { SearchPage } from '../search/search';
import { InsertapmPage } from '../insertapm/insertapm';
import { DdepartmentPage } from '../ddepartment/ddepartment';
import { HomePage } from '../home/home';
import { Home3Page } from '../home3/home3';
/**
 * Generated class for the Home2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html',
})
export class Home2Page {

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
  home3(){
    this.navCtrl.push(Home3Page)
  }
  
  }
  