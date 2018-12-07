import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ProfileModule } from '../../components/profile/profile.module';

import { HomePage } from './home';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    ProfileModule,
  ],
})
export class HomePageModule {}
