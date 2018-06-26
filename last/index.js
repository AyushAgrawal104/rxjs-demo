// Emmit only the last value only
// come time it take a predicate as a input and return last value with true

import Rx from 'rxjs';

const lastObserb = Rx.Observable.range(1,15);

lastObserb
   // .last()
    .last(n => n<6)
    .subscribe(a => console.log(a))