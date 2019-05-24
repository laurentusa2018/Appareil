import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Appareil Page 1';
  isAuth = false;

 // lastUpdate = new Date();
lastUpdate = new Promise(
  (resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      },2000
    );
  }
);

  appareils = [
    {
      name: 'Machine à laver',
      status: 'éteint'
    },
    {
      name: 'Télévision',
      status: 'éteint'
    },
    {
      name: 'Ordinateur',
      status: 'allumé'
    }
  ];




  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }

  onAllumer() {
    console.log('On allume tout');
  }


}
