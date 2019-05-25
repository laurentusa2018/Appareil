import {Component, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {switchAll} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'Appareil Page 1';
  isAuth = false;

  // lastUpdate = new Date();
  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  appareils: any[];


  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }


  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre(){
    this.appareilService.switchOffAll();
  }


}
