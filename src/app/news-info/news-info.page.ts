import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { Platform, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-news-info',
  templateUrl: './news-info.page.html',
  styleUrls: ['./news-info.page.scss'],
})
export class NewsInfoPage implements OnInit {

  blogname: string;
  blogcontent: string;
  blogdate: string;
  blogtime: string;
  blogdata: any;
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
      this.loadNews(this.id);
    }
  
  
    async loadNews(myid) {

      const loader = await this.loadingCtrl.create({
        message: "Please wait......",
      });
      loader.present();
       
      return new Promise(resolve => {
         let body = {
          blogdetail: "process_blogdetail",
          blogid: myid 
         }
         
         this.accessserv.postData(body, 'blogdetail-api.php').subscribe((res:any) =>{
            if(res.success == true) {
              loader.dismiss();
              console.log(res.result);
              this.blogdata = res.result;
              this.blogname = this.blogdata.blogtitle;
              this.blogcontent = this.blogdata.blogcontent;
              this.blogdate = this.blogdata.blogdate;
              this.blogtime = this.blogdata.blogtime;          
            } else {
              this.presentAlert("No News For Now");
              console.log("Error in loading news");
            }
         },(err)=>{
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


}
