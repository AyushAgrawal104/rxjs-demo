// mainly use for console.log
// do not change any value
// Don't call any api
// now a days tap
// Mainly use for debugging

import Rx from 'rxjs';

let doOpera = Rx.Observable.interval(1000);

doOpera
    .map( n => n*n)
    .map( n => n/3)
    .do(a =>console.log("a"))
    .subscribe(e => console.log(e))