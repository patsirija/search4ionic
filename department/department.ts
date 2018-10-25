import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DdepartmentPage } from '../ddepartment/ddepartment';

/**
 * Generated class for the DepartmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-department',
  templateUrl: 'department.html',
})
export class DepartmentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ddepartment(){
    this.navCtrl.push(DdepartmentPage)
  }
}
