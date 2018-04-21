import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../app.settings';
import { Settings } from '../../app.settings.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public settings: Settings;
  constructor(public appSettings:AppSettings, public router:Router){
    this.settings = this.appSettings.settings; 
  }

  ngOnInit() {
  }

  showChat() {
    // navigate to ~/chat
    this.router.navigate(['/chat']);
  }

}
