import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PlacePage  } from '../place/place';
import { SearchPage } from '../search/search';
import { InsertapmPage } from '../insertapm/insertapm';
import { DdepartmentPage } from '../ddepartment/ddepartment';
import { Home2Page } from '../home2/home2';
import { Home3Page } from '../home3/home3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

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
home2(){
  this.navCtrl.push(Home2Page)
}
home3(){
  this.navCtrl.push(Home3Page)
}

}
