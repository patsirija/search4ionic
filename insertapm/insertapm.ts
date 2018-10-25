import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterapmPage } from '../registerapm/registerapm';


/**
 * Generated class for the InsertapmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-insertapm',
  templateUrl: 'insertapm.html',
})
export class InsertapmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  insertapm(){
    this.navCtrl.push(InsertapmPage)
  }
  registerapm(){
    this.navCtrl.push(RegisterapmPage)
  }
}
