import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs/Observable';
import { ServiceService } from '../services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"


@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
video: string = "movies";
id: string;
listvideos: any;
videourl:SafeResourceUrl;

  constructor(
    private activatedroute: ActivatedRoute,
    private route: Router,
    private accessserv: ServiceService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private DomSanitizer:DomSanitizer,
    private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.listVideo();
  }

  async listVideo() {
    const loader = await this.loadingCtrl.create({
      message: "Please wait......",
    });
    loader.present();
    this.listvideos = this.accessserv.getlistVideos(this.id);
    this.listvideos.subscribe(data => {
       if(data) {
         loader.dismiss();
       }
      //console.log(data);
    }, async err => { 
        const alert = await this.alertCtrl.create({
        header: 'Error',
        message: 'No Videos found or No Internet Connection',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.navCtrl.navigateForward('/home');
            }
          }
        ],
        
    });
        loader.dismiss();
        await alert.present();
  })

}

  openSingle(id) {
    this.navCtrl.navigateForward('/video-detail/' + id);
  }

}
