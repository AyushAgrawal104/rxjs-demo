// Emmit new Observable from previous one
// If Source Observable did not emmit any value the it will emmit 
// if it emmit some thing then it work fine

import Rx from 'rxjs';

const defaultIfObser = Rx.Observable.empty();

defaultIfObser
    .defaultIfEmpty("Empty Value Emmited")
    .subscribe( a=> console.log(a))