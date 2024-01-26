import { Component, OnInit } from '@angular/core';
import { ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';
import { ServiceService } from '../services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-livetv',
  templateUrl: './livetv.page.html',
  styleUrls: ['./livetv.page.scss'],
})
export class LivetvPage implements OnInit {

  id: any;
  videourl:SafeResourceUrl;
  videotitle:any;
  myid:any;

  videourl2:SafeResourceUrl;

  test:boolean = false;

  constructor(private activatedroute: ActivatedRoute,
    private DomSanitizer:DomSanitizer,
    private accessserv: ServiceService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private router: Router,
    private platform: Platform) {  
    }

  async ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
 
      this.videourl  = this.DomSanitizer.bypassSecurityTrustResourceUrl(
        'https://www.youtube.com/embed/live_stream?channel=UC_8_w-pM9yJXpqjMJguouLw');

  }


  goback() {
    this.router.navigate(['/home']);
  }



}
