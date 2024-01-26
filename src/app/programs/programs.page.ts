import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { Platform, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";

import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;

@Component({
  selector: 'app-programs',
  templateUrl: './programs.page.html',
  styleUrls: ['./programs.page.scss'],
})
export class ProgramsPage implements OnInit {

  name: string;
  catdata: any;

  name2: string;
  catdata2: any;

  catstate: any;
  catstate2: any;

  constructor(private router: Router, 
    private navCtrl: NavController,
    private accessserv: ServiceService,
    private storage: Storage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public platform: Platform,
    private DomSanitizer:DomSanitizer,) { }
  
    ngOnInit() {
      this.loadCat();
      this.loadCat2();

       if(this.catstate == 'false' && this.catstate2 == 'false') {
        this.presentAlert("No Programs For Now");
       } 
    }
  
  
    async loadCat() {
       
      return new Promise(resolve => {
         let body = {
           category: "process_category",
         }
         
         this.accessserv.postData(body, 'category-api.php').subscribe((res:any) =>{
            if(res.success == true) {
              console.log(res.result);
              this.catdata = res.result;

            } else {
              //this.presentAlert("No Programs For Now");
              //console.log("Error in loading programs");
              this.catstate = 'false';
            }
         },(err)=>{
             //this.presentAlert("No Programs For Now");
             //console.log(err);
             this.catstate = 'false';
         });
  
      });
  
   
  }

  async loadCat2() {
       
    return new Promise(resolve => {
       let body = {
         category2: "process_category2",
       }
       
       this.accessserv.postData(body, 'category-api2.php').subscribe((res:any) =>{
          if(res.success == true) {
            console.log(res.result);
            this.catdata2 = res.result;

          } else {
            //this.presentAlert("No Programs For Now");
            //console.log("Error in loading programs");
            this.catstate2 = 'false';
          }
       },(err)=>{
           //this.presentAlert("No Programs For Now");
           console.log(err);
           this.catstate2 = 'false';
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
  
  
  
    volunteer(id:any) {
      this.navCtrl.navigateForward('/volunteer/' + id);
    } 

    support(id:any) {
      this.navCtrl.navigateForward('support/' + id);
    } 

    facilityPage() {
      this.router.navigate(['/facility'])
    }

    roomPage() {
      this.router.navigate(['/room'])
    }

    //testFormPage() {
      //this.router.navigate(['/testform'])
    //}

    testFormPage() {
        Browser.open({ url: 'https://docs.google.com/forms/d/e/1FAIpQLSejbDlGW9ioHs1QQi226ouZHpZZtgqnhocSOEX6ucur--gisA/viewform' });

    }

    careerFormPage() {
        Browser.open({ url: "https://docs.google.com/forms/d/e/1FAIpQLSeavNmihUPGulQjn1spkOraRfQJhFlNUrFCuNyfsMFjj3AtrA/viewform" }); 
    }
}
