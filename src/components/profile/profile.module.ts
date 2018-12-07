import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ProfileComponent } from './profile';

@NgModule({
  declarations: [
    ProfileComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    ProfileComponent,
  ],
})
export class ProfileModule {
}
