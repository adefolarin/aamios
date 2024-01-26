import { Component, OnInit } from '@angular/core';
import { NavController, ToastController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Router,  ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {

  cat: string;

  id: any;

  name: string = "";
  pnum: string = "";
  email: string = "";
  amount: string = "";

 constructor(
   private modalController: ModalController, 
   private route: Router,
   private activatedroute: ActivatedRoute,
   private navCtrl: NavController,
    private accessserv: ServiceService,
    private storage: Storage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
      this.id = this.activatedroute.snapshot.paramMap.get('id');
      if(this.id == "1") {
        this.cat = "TITHE";
      }
      else if(this.id == "2") {
        this.cat = "OFFERING";
      }
      else if(this.id == "3") {
        this.cat = "OTHERS";
      }

      //this.payWithPayPal();
  }
 
 
  async payWithPayPal() {

  

  }



  async presentToast(a,color) {
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 2000,
      position: 'middle',
      color:color,
    });
    toast.present();
  }





 }
