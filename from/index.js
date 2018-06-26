import Rx from 'rxjs';

// Emmit Each eament of any element one by one

//TODO promise, Generator

let array = [1,2,3,45,6,798]

Rx.Observable.from(array)
    .subscribe( e => console.log(e))