import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-mobilenav',
  templateUrl: './mobilenav.component.html',
  styleUrls: ['./mobilenav.component.scss']
})
export class MobilenavComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();
  isAuthenticated = false;
  private authStatusSub: Subscription;

  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authStatusSub = this.authService
      .getAuthStatusListener()
      .subscribe((authStatus: boolean) => {
        this.isAuthenticated = authStatus;
      });
  }

  onLogout() {
    this.authService.logout();
    this.onClose();
  }
  
  onClose() {
    this.closeSidenav.emit();
  }

  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
}
