import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage = 'TabsPage';

  constructor(keyboard: Keyboard, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
      statusBar.styleLightContent();

      if (!platform.is('mobileweb') && !platform.is('core')) {
        keyboard.hideFormAccessoryBar(false);
      }

    }, err => {
      console.error(err);
    });

  }
}
