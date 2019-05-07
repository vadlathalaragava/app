import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'customer',
      url: '/customer',
      icon: 'person'
    },
    {
      title: 'about',
      url: '/about',
      icon: 'clipboard'
    },
    // {
    //   title: 'addcustomer',
    //   url: '/addcustomer',
    //   icon: 'person'
    // },
    // {
    //   title: 'listcustomer',
    //   url: '/listcustomer',
    //   icon: 'person'
    // },
    {
      title: 'logout',
      url: '/login',
      icon: 'exit'
    }
  ];
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
