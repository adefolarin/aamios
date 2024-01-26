import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { Platform, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.page.html',
  styleUrls: ['./event-info.page.scss'],
})
export class EventInfoPage implements OnInit {

  calendarname: string;
  calendarcontent: string;
  calendardate: string;
  calendartime: string;
  calendardata: any;
  imgurl:SafeResourceUrl;

  id: any;

  constructor(private router: Router, 
    private navCtrl: NavController,
    private accessserv: ServiceService,
    private storage: Storage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public platform: Platform,
    private DomSanitizer:DomSanitizer,
    private activatedroute: ActivatedRoute) { }
  

    ngOnInit() {
      this.id = this.activatedroute.snapshot.paramMap.get('id');
      this.loadEvent(this.id);
    }
  
  
    async loadEvent(myid) {

      const loader = await this.loadingCtrl.create({
        message: "Please wait......",
      });
      loader.present();
       
      return new Promise(resolve => {
         let body = {
          calendardetail: "process_calendardetail",
          calendarid: myid 
         }
         
         this.accessserv.postData(body, 'calendardetail-api.php').subscribe((res:any) =>{
            if(res.success == true) {
              loader.dismiss();
              console.log(res.result);
              this.calendardata = res.result;
              this.calendarname = this.calendardata.calendarname;
              this.calendarcontent = this.calendardata.calendarcontent;
              this.calendardate = this.calendardata.calendardate;
              this.calendartime = this.calendardata.calendartime;          
            } else {
              this.presentAlert("No Events For Now");
              console.log("Error in loading calendar");
            }
         },(err)=>{
             this.presentAlert("No Events For Now");
             console.log(err);
         });
  
      });
  
   
  }
  
  
    async presentAlert(a) {
      const alert = await this.alertCtrl.create({
        header: a,
        backdropDismiss: false,
        buttons: [
          {
            text: 'Close',
            handler: () => {
              this.navCtrl.navigateForward('/home');
            }
          }, {
            text: 'OK',
            handler: () => {
              this.navCtrl.navigateForward('/home');
            }
          }
        ]
      });
      await alert.present();
    }

}
