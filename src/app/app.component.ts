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
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'square-outline'
    },
    {
      title: 'Customer',
      url: '/customer',
      icon: 'contacts'
    },
    {
      title: 'About',
      url: '/aboutus',
      icon: 'information-circle-outline'
    },
    {
      title: 'Student',
      url: '/student',
      icon: 'contacts'
    },
    {
      title: 'Logout',
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
