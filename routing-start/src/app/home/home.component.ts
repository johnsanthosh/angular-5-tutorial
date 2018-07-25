import { Component, OnInit } from '@angular/core';
import { Router } from '../../../node_modules/@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServers() {
    this.router.navigate(['/servers', 5, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }

  onLogin() {
    this.authService.logIn();
  }

  onLogout() {
    this.authService.logOut();
  }

}
