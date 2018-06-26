// Return the first Element that match the predicate and terminate
// mainly use with long Observable
// Mainly use for termination at a perticular Condition
// So It return only one value.
// You want to seearch only single thing in stream

import Rx from 'rxjs';

let firstObser = Rx.Observable.timer(200,1000);

firstObser
    .first( a => a==3)
    .subscribe(a => console.log(a))
