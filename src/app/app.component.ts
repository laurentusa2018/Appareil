import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppareilService} from './services/appareil.service';
import {switchAll} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import 'rxjs';
import 'rxjs/add/observable/interval';
// import 'rxjs-compat';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  seconde: number;
  counterSubscription: Subscription;

  constructor() {

  }

  ngOnInit() {
    const counter = Observable.interval(1000);
    this.counterSubscription = counter.subscribe(
      (value: number) => {
        this.seconde = value;
      },
      (error: any) => {
        console.log('Une erreur a été rencontrée !')!;
      },
      () => {
        console.log('Observable complétée !');
      }
    );


    // Sans utiliser la subscription
    // counter.subscribe(
    //       (value: number) => {
    //         this.seconde = value;
    //       },
    //       (error: any) => {
    //         console.log('Une erreur a été rencontrée !');
    //       },
    //       () => {
    //         console.log('Obserbable complétée !');
    //       }
    //     );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }
}
