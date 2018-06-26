// All Element passes the predicate then only it pass and return true
// return value only complete time
// So use with short observale

import Rx from 'rxjs';

const everyDemo = Rx.Observable.range(1,9);

everyDemo
    .map(n => n*2)
    .do(a => console.log(a))
    .every( n => n%2 ==0)
    .subscribe(a => console.log(a))