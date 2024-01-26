import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController, Platform } from '@ionic/angular';
import {DomSanitizer,SafeResourceUrl} from "@angular/platform-browser"

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.page.html',
  styleUrls: ['./playlists.page.scss'],
})
export class PlaylistsPage implements OnInit {

  id: string;
  myplaylist: any;

  constructor(
    private activatedroute: ActivatedRoute,
    private route: Router,
    private accessserv: ServiceService,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private DomSanitizer:DomSanitizer,) { }

  ngOnInit() {
    this.playlists();
  }

  async playlists() {
    this.myplaylist = this.accessserv.getPlaylistsForChannel();
    this.myplaylist.subscribe(data => {
      //console.log("Playlists: " + data);
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
        await alert.present();
  })

}


openPlaylistItems(id) {
  this.navCtrl.navigateForward('/movies/' + id);
}

}
