import { NgModule, APP_INITIALIZER, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { SuperAdminDashboardComponent } from './pages/super-admin-dashboard/super-admin-dashboard.component';
import { StudentDashboardComponent } from './pages/student-dashboard/student-dashboard.component';
import { StudentDepartmentRequirementComponent } from './pages/student-department-requirement/student-department-requirement.component';
import { StudentProfileComponent } from './pages/student-profile/student-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { ErikaComponent } from './pages/erika/erika.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoginComponent } from './pages/login/login.component';
import { MatTableModule } from '@angular/material/table';
import { StudentsComponent } from './pages/students/students.component';
import { AdminRequirementsComponent } from './pages/admin-requirements/admin-requirements.component';
import { AdminStudentsComponent } from './pages/admin-students/admin-students.component';
import { AuthService } from './services/auth.service';
import { StudentListComponent } from './pages/student-list/student-list.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DatePipe } from '@angular/common';
import { SuperAdminStudentsComponent } from './pages/super-admin-students/super-admin-students.component';
import { SuperAdminAdminsComponent } from './pages/super-admin-admins/super-admin-admins.component';
import { MatSelectModule } from '@angular/material/select';
import { AdminProfileComponent } from './pages/admin-profile/admin-profile.component';
import { AdminSideMenuComponent } from './menu/admin-side-menu/admin-side-menu.component';
import { SuperAdminSideMenuComponent } from './menu/super-admin-side-menu/super-admin-side-menu.component';
import { SuperAdminClearanceComponent } from './pages/super-admin-clearance/super-admin-clearance.component';
import { SmallModalComponent } from './modals/small-modal/small-modal.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StudentSideMenuComponent } from './menu/student-side-menu/student-side-menu.component';
import { StudentClearanceComponent } from './pages/student-clearance/student-clearance.component';
import { SuperAdminFaqComponent } from './pages/super-admin-faq/super-admin-faq.component';
import { AdminFaqComponent } from './pages/admin-faq/admin-faq.component';
import { StudentFaqComponent } from './pages/student-faq/student-faq.component';
import { SuperAdminUsersManualComponent } from './pages/super-admin-users-manual/super-admin-users-manual.component';
import { AdminUsersManualComponent } from './pages/admin-users-manual/admin-users-manual.component';
import { StudentUsersManualComponent } from './pages/student-users-manual/student-users-manual.component';
import { AdminStudentRequirementsComponent } from './pages/admin-student-requirements/admin-student-requirements.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PreviewPicModalComponent } from './components/preview-pic-modal/preview-pic-modal.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { provideSwal } from './config/swal-options';

export function initApp(authService: AuthService) {
  return () => authService.autoLogin();
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AdminDashboardComponent,
    SuperAdminDashboardComponent,
    StudentDashboardComponent,
    StudentDepartmentRequirementComponent,
    StudentProfileComponent,
    LoginComponent,
    StudentsComponent,
    AdminRequirementsComponent,
    AdminStudentsComponent,
    ErikaComponent,
    StudentListComponent,
    SuperAdminStudentsComponent,
    SuperAdminAdminsComponent,
    AdminProfileComponent,
    AdminSideMenuComponent,
    SuperAdminSideMenuComponent,
    SuperAdminClearanceComponent,
    SmallModalComponent,
    ContactPageComponent,
    StudentSideMenuComponent,
    StudentClearanceComponent,
    SuperAdminFaqComponent,
    AdminFaqComponent,
    StudentFaqComponent,
    SuperAdminUsersManualComponent,
    AdminUsersManualComponent,
    StudentUsersManualComponent,
    AdminStudentRequirementsComponent,
    PreviewPicModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatSelectModule,
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      deps: [AuthService],
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
