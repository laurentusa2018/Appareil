import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Appareil Page 1';
  isAuth = false;
  appareilOne = 'Machine à laver';
  appareilTwo = 'Télévision';
  appareilThree = 'Ordinateur';
  appareilStatus = 'éteint';


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
