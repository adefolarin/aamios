import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { IonicStorageModule } from '@ionic/storage'

import { ServiceService } from './services/service.service';

//import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { FormsModule } from "@angular/forms";

import { HomePage } from './home/home.page';

//import { Network } from '@ionic-native/network/ngx';

//import { Push } from '@ionic-native/push/ngx';

//import { FCM } from '@ionic-native/fcm/ngx';

//import { PayPal } from '@ionic-native/paypal/ngx';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
   imports: [
    BrowserModule,
    FormsModule, 
	  IonicModule.forRoot(), 
      // PaymentPageModule,   
      AppRoutingModule,
      IonicStorageModule.forRoot(),
      HttpClientModule,
      TranslateModule,      
      TranslateModule.forRoot({
        loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ServiceService,
    HomePage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

