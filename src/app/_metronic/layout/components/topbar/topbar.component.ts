import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../core/layout.service';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent implements OnInit {
  toolbarButtonMarginClass = 'ms-1 ms-lg-3';
  toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px';
  toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px';
  toolbarButtonIconSizeClass = 'svg-icon-1';
  headerLeft: string = 'menu';
  user$: Observable<UserType>;
  constructor(
    private layout: LayoutService,
    private auth: AuthService,
  ) { }

  ngOnInit(): void {
    this.headerLeft = this.layout.getProp('header.left') as string;
    this.user$ = this.auth.currentUserSubject.asObservable();
  }
}
