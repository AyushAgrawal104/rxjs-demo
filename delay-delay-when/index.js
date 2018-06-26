//
//
///

import Rx from 'rxjs';

const delayDemo = Rx.Observable.of(
        42
)
    
// delayDemo
//     .do(a => console.log(a))
//     .delay(1000)
//     .subscribe(a => console.log(a))


const delayDemo1 = Rx.Observable.range(1,9);

// delayDemo1
//     .do(a => console.log("Enter in do "))
//     .delay(1000)
//     .subscribe(a => console.log(a))



    /////////////////////////////////////////////////////////////////////////////////
// Now we can see that delay set a timer of 1000 ms for each elemant 
// so do console occur first then subscribe 
// But we want time delay b/w each observer 
// so here we have to set diffrent time delay for diffrent observer
// here not possible
//Solution  -> DelayWhen

delayDemo1
    .do(a => console.log("Enter in Do"))
    .delayWhen( n => Rx.Observable.timer( n*1000))
    .subscribe(n => console.log(n))



// It take a Observable as a input