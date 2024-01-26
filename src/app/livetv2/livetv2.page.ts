import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-livetv2',
  templateUrl: './livetv2.page.html',
  styleUrls: ['./livetv2.page.scss'],
})
export class Livetv2Page implements OnInit {

  id: any;
  videourl:SafeResourceUrl;
  videotitle:any;
  myid:any;

  videourl2:any;

  test:boolean = false;

  constructor(private activatedroute: ActivatedRoute,
    private DomSanitizer:DomSanitizer,
    private accessserv: ServiceService,
    private loadingCtrl: LoadingController,
    public platform: Platform) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');

    /*this.videourl2  = this.DomSanitizer.bypassSecurityTrustResourceUrl
    ('https://player.twitch.tv/?channel=esl_csgo&parent=www.techtracenigeria.com.ng');*/

    /*this.platform.ready().then(() => {
      let browser = this.iab.create("https://www.techtracenigeria.com.ng");
   });*/
      
  }


  async loadTV() {
          
  }




}

