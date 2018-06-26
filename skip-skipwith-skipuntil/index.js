// It is opposite of take
// skip
    // The number you give that much observable skip then it goes forward

//

import Rx from 'rxjs';

const skipObserv  = Rx.Observable.interval(1000);

// skipObserv
//     .do(n => console.log(n))
//     .skip(5)
//     .subscribe(a => console.log(a)


//skipWhile stop all observer while giving predicate is true once its become false for 1+ then it pass the value

// skipObserv
//     .do( n => console.log(n))
//     .skipWhile( n=> n != 6)
//     .subscribe( a => console.log(a))


// Skip until take a observer as a input Mainly timing

skipObserv
    .do( n=>console.log(n))
    .skipUntil(Rx.Observable.timer(5000))
    .subscribe(a => console.log(a))