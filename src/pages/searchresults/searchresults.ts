import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MyBookingsPage } from '../my-bookings/my-bookings';
import { NotificationsPage } from '../notifications/notifications';
import { ChatPage } from '../chat/chat';
import { ListYourCarPage } from '../list-your-car/list-your-car';
import { SearchPage } from '../search/search';
import { MyprofilePage } from '../myprofile/myprofile';
import { CardetailsPage } from '../cardetails/cardetails';
import { UserprofilePage } from '../userprofile/userprofile';
import { LocationselectPage } from '../locationselect/locationselect';

/**
 * Generated class for the SearchresultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchresults',
  templateUrl: 'searchresults.html',
})
export class SearchresultsPage {

  public lat 
  public long 
  public locationname
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl : ViewController, public modalCtrl : ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchresultsPage');
  }
  ionViewWillEnter(){ 
    this.viewCtrl.showBackButton(false)
  }
  goToHome(){
    this.navCtrl.push(HomePage)
  }
  goTomyBookings(){
    this.navCtrl.push(MyBookingsPage)
  }
  goToNotifications(){
    this.navCtrl.push(NotificationsPage)
  }
  goToChat(){
    this.navCtrl.push(ChatPage)
  }
  goToListYourCar(){
    this.navCtrl.push(ListYourCarPage)
  }
  goToSearch(){
    this.navCtrl.push(SearchPage, {animation: 'left'})
  }
  goToSearchResults(){
    this.navCtrl.push(SearchresultsPage)
  }
  onClickSearchIcon(onSearch){
    this.navCtrl.push(HomePage, {onSearch: onSearch})
  }
  goToMyprofile(){
    this.navCtrl.push(MyprofilePage)
  }
  goToCarDetails(){
    this.navCtrl.push(CardetailsPage)
  }
  goToUserProfile(){
    this.navCtrl.push(UserprofilePage)
  }
  launchLocationPage(){
 
    let modal = this.modalCtrl.create(LocationselectPage);
  
    modal.onDidDismiss((location) => {
        console.log(location);
        if(location !=null){
          this.lat = location.lat
          this.long = location.lng 
          this.locationname = location.name
        }
        console.log(this.lat + " --- "  + this.long)
    });
  
    modal.present();   
  
  }
}
