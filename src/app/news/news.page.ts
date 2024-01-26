import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { Platform, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  events_tab: string = "upcoming";
  name: string;
  newsdata: any;
  imgurl:SafeResourceUrl;
    
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
      this.loadNews();
    }
  
  
    async loadNews() {

      const loader = await this.loadingCtrl.create({
        message: "Please wait......",
      });
      loader.present();
       
      return new Promise(resolve => {
         let body = {
           blog: "process_blog",
         }
         
         this.accessserv.postData(body, 'blog-api.php').subscribe((res:any) =>{
            if(res.success == true) {
              loader.dismiss();
              console.log(res.result);
              this.newsdata = res.result;

              if(this.newsdata == null) {
                loader.dismiss();
                this.presentAlert("No News For Now");
              } 

            } else {
              loader.dismiss();
              this.presentAlert("No News For Now");
              console.log("Error in loading news");
            }
         },(err)=>{
             loader.dismiss();
             this.presentAlert("No News For Now");
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
  
  
  
    newsInfo(id:any) {
      this.navCtrl.navigateForward('/news-info/' + id);
    } 


    ImageError(img) {
     img.src = "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    }

}
