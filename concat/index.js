// add second Observable over first
// fist  one must end
//Work in an aync way


import Rx from 'rxjs';


const concat1 = Rx.Observable.range(1,10)
const concat2 = Rx.Observable.interval(1000)

concat1
    .concat(concat2)
    .subscribe(a => console.log(a))

