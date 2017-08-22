import { Component } from '@angular/core';

import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated: boolean;
  constructor(
    private dsService: DataStorageService,
    private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
  onSaveData() {
    this.dsService.storeRecipes().subscribe((result) => console.log(result));
  }

  onFetchData() {
    this.dsService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }
}
