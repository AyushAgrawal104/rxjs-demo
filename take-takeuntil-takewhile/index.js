//TAKE
    //you provide a number it emmit only that much observer

//TakeWhile

    // you provide a predicate till that predicate is true it emmit if it went false it stop and no emmision

//TakeUntil

    //you prvide a observer and take value untill that observer resolve :: maily timer


import Rx from 'rxjs';

const takeDemo = Rx.Observable.interval(500);


takeDemo
    .take(3)
    .subscribe(n => console.log(n))

takeDemo
    .takeWhile(n => n != 5)
    .subscribe(n => console.log(n))

takeDemo
    .takeUntil(Rx.Observable.timer(2500))
    .subscribe(n => console.log(n))