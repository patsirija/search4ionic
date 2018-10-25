import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InsertapmPage } from '../insertapm/insertapm';

/**
 * Generated class for the RegisterapmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registerapm',
  templateUrl: 'registerapm.html',
})
export class RegisterapmPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterapmPage');
  }
  insertapm(){
    this.navCtrl.push(InsertapmPage)
  }
}
