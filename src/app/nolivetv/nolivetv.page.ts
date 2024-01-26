import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-nolivetv',
  templateUrl: './nolivetv.page.html',
  styleUrls: ['./nolivetv.page.scss'],
})
export class NolivetvPage implements OnInit {

  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private alertCtrl: AlertController) { }

  async ngOnInit() {
    const loader = await this.loadingCtrl.create({
      message: "Please wait......",
    });
    loader.present();

    loader.dismiss();
            const alert = await this.alertCtrl.create({
            header: 'Live TV',
            message: 'Live TV Not Available or No Internet Connection',
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.navCtrl.navigateForward('/home');
                }
              }
            ],
          });
          await alert.present();
  }

}
