import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.page.html',
  styleUrls: ['./podcast.page.scss'],
})
export class PodcastPage implements OnInit {

  datastorage: any;
  name: string;
  podcastdata: any;

  constructor(private activatedroute: ActivatedRoute,
    private DomSanitizer:DomSanitizer,
    private accessserv: ServiceService,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,) { }

  ngOnInit() {
    this.loadpodcast();
  }


  async loadpodcast() {

    const loader = await this.loadingCtrl.create({
      message: "Please wait......",
    });
    loader.present();
     
    return new Promise(resolve => {
       let body = {
         podcast: "process_podcast",
       }
       
       this.accessserv.postData(body, 'podcast-api.php').subscribe((res:any) =>{
          if(res.success == true) {
            loader.dismiss();
            this.podcastdata = res.result;
            console.log(this.podcastdata)
          } else {
            
            console.log("Error in loading podcast");
          }
       }, async err =>{
            loader.dismiss();
            const alert = await this.alertCtrl.create({
            header: 'Podcasts',
            message: 'No Podcasts found',
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
       });

    });

 
}

}
