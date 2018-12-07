import { Component } from '@angular/core';

import { BackendServiceProvider } from '../../providers/backend-service/backend-service';

@Component({
  selector: 'ProfileComponent',
  templateUrl: 'profile.html',
})
export class ProfileComponent {

  constructor(private backendService: BackendServiceProvider) {
  }

  ngOnInit() {
    return this.getPosts();
  }

  async getPosts() {

    try {
      const posts = await this.backendService.getPosts().toPromise();
      console.log(posts);
    } catch (err) {
      console.error(err);
    }

  }

}
