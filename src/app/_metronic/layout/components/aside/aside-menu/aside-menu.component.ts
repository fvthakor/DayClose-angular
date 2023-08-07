import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../../environments/environment';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.scss'],
})
export class AsideMenuComponent implements OnInit {
  appAngularVersion: string = environment.appVersion;
  appPreviewChangelogUrl: string = environment.appPreviewChangelogUrl;
  user$: Observable<UserType>;
  adminMenus = [
    { name: 'Banner', link: '/banner', icon: './assets/media/icons/duotune/general/gen027.svg' },
    { name: 'Store', link: '/store', icon: './assets/media/icons/duotune/general/gen022.svg' },
    { name: 'Document Type', link: '/document-type', icon: './assets/media/icons/duotune/general/gen020.svg' },
    { name: 'Skill', link: '/skill', icon: './assets/media/icons/duotune/general/gen021.svg' },
    { name: 'County', link: '/county', icon: './assets/media/icons/duotune/general/gen027.svg' },
    { name: 'City', link: '/city', icon: './assets/media/icons/duotune/general/gen024.svg' },
    { name: 'Zipcode', link: '/pincode', icon: './assets/media/icons/duotune/general/gen025.svg' },
    { name: 'Manager', link: '/user', icon: './assets/media/icons/duotune/general/gen026.svg' },
  ]

  managerMenus = [
    { name: 'Category', link: '/category', icon: './assets/media/icons/duotune/general/gen024.svg' },
    { name: 'Task', link: '/task', icon: './assets/media/icons/duotune/general/gen022.svg' },
    { name: 'TaskStatus', link: '/task-status', icon: './assets/media/icons/duotune/general/gen022.svg' },
    { name: 'Employee', link: '/user', icon: './assets/media/icons/duotune/general/gen026.svg' },

  ]

  employeeMenus = [
    { name: 'Task', link: '/task', icon: './assets/media/icons/duotune/general/gen022.svg' },
  ]

  constructor(
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
