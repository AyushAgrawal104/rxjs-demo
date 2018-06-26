import Rx from 'rxjs';
console.log("Range File")

// Static Operator are italic -- came directly from Rx Object
//range(start,length)


let rangeobser = Rx.Observable.range(0,15);

rangeobser
    .subscribe(e => console.log(`Rang Emmited ${e}`))