import { Component, OnInit } from '@angular/core';
import { Router,  ActivatedRoute } from '@angular/router';
import { Platform, NavController, ToastController, LoadingController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/Storage';
import { ServiceService } from '../services/service.service';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.page.html',
  styleUrls: ['./mytest.page.scss'],
})
export class MytestPage implements OnInit {

  datastorage: any;
  name: string;
  blogdata: any;
  app_url;

  userid: any;


  id: string;
 
  servicedata: any;

  tvdata: any;

  servicebooltrue:boolean;
  serviceboolfalse:boolean;
  tvbooltrue:boolean;
  tvboolfalse:boolean;

  fallbackbool:boolean;

  nonetwork:boolean;

  siteurl:SafeResourceUrl;

  bool1: boolean;
  bool2: boolean;

  constructor(private router: Router, 
    private navCtrl: NavController,
  	private accessserv: ServiceService,
    private storage: Storage,
    private storage2: Storage,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    public platform: Platform,
    private DomSanitizer:DomSanitizer) { 
  
    
    }

  ngOnInit() {
    this.liveService();
    this.liveTv();
 
    
  }

    

 

  ionViewDidEnter() {

    /*setInterval(()=> {
      this.singleVideo(); this.singleVideo2() 
    },4000); */

    
  }


  async liveService() {
       
    return new Promise(resolve => {
       let body = {
         liveservice: "process_liveservice",
       }
       
       this.accessserv.postData(body, 'liveservice-api.php').subscribe((res:any) =>{
          if(res.success == true) {
            console.log(res.result);
            this.servicedata = res.result;
            this.servicedata = this.servicedata.liveservicestatus;

          } else {
            
            console.log("Error in fetching live service");
          }
       },(err)=>{
           console.log(err);
       });

    });

 
}


async liveTv() {
       
  return new Promise(resolve => {
     let body = {
       livetv: "process_livetv",
     }
     
     this.accessserv.postData(body, 'livetv-api.php').subscribe((res:any) =>{
        if(res.success == true) {
          console.log(res.result);
          this.tvdata = res.result;
          this.tvdata = this.tvdata.livetvstatus;

        } else {
          
          console.log("Error in fetching live tv");
        }
     },(err)=>{
         console.log(err);
     });

  });


}



    


    liveservice() {
      this.navCtrl.navigateForward('/livetv/1');
    }

    livetv() {
      //this.navCtrl.navigateForward(['/livetv2/1']);
   
    }

    nolivetv() {
      this.router.navigate(['/nolivetv']);
    }

}
