import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'super-admin-side-menu',
  templateUrl: './super-admin-side-menu.component.html',
  styleUrls: ['./super-admin-side-menu.component.scss']
})
export class SuperAdminSideMenuComponent {
  @Input() pageSelected?: 'home' | 'clearance' | 'admins' | 'students' | 'manual' | 'faq';
  constructor(private router: Router, private authService: AuthService) {}

  goToHome() {
    if (this.pageSelected == 'home') {
      return;
    }

    this.router.navigate(['super-admin', 'dashboard']);
  }

  goToClearancePage() {
    if (this.pageSelected == 'clearance') {
      return;
    }
    this.router.navigate(['super-admin', 'clearance']);
  }

  goToAdminsList() {
    if (this.pageSelected == 'admins') {
      return;
    }
    this.router.navigate(['super-admin', 'admins']);
  }

  goToStudentsList() {
    if (this.pageSelected == 'students') {
      return;
    }
    this.router.navigate(['super-admin', 'students']);
  }

  goToManual() {
    if (this.pageSelected == 'manual') {
      return;
    }
    this.router.navigate(['super-admin', 'users-manual']);
  }

  goToFaq() {
    if (this.pageSelected == 'faq') {
      return;
    }
    this.router.navigate(['super-admin', 'faqs']);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
