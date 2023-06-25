import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: '<body[root]>',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  today: Date = new Date();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  fullForm = false

  ngOnInit(): void {
    document.body.classList.add('bg-white');
    this.router.events.subscribe(response => {
      if (response instanceof NavigationEnd) {
        this.fullForm = this.router.url === '/auth/registration' ? true : false;
      }
    })
    this.fullForm = this.router.url === '/auth/registration' ? true : false;
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-white');
  }
}
