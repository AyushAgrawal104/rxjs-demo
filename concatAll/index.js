//ConcatAll
// When a Observale Emmit other Observable
// it subscribe them one by one 
//they subscribe in order

import Rx from 'rxjs';

const concatAllDemo = Rx.Observable.of(
    Rx.Observable.range(1,5),
    Rx.Observable.interval(1000).take(10),
    Rx.Observable.timer(3000,100).take(5)
)

concatAllDemo
    .concatAll()
    .subscribe(a => console.log(a))