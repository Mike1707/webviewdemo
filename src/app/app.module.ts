import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JWT_OPTIONS, JwtModule } from '@auth0/angular-jwt';
import { Keyboard } from '@ionic-native/keyboard';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { BackendServiceProvider } from '../providers/backend-service/backend-service';

import { MyApp } from './app.component';

const storage: Storage = new Storage({});

export const baseUrl = 'https://jsonplaceholder.typicode.com';

export function jwtOptionsFactory() {
  return {
    whitelistedDomains: ['localhost:1337'],
    tokenGetter: () => {
      return storage.get('access_token');
    },
  };
}

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BackendServiceProvider,
    { provide: 'baseUrl', useValue: baseUrl },
  ],
})
export class AppModule {
}
