import { RSA_X931_PADDING } from "constants";

//ConcatMap
//Take a value as a input return Observable and concatMap subscribe to it.

import Rx from 'rxjs';

Rx.Observable.range(1,5)
    .concatMap(n => Rx.Observable.range(1, n+1))
    .subscribe(a => console.log(a))

Rx.Observable.range(1,5)
    .concatMapTo(Rx.Observable.range(1,3))
    .subscribe(a => console.log(a))