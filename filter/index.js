import Rx from 'rxjs';

let filterExample = Rx.Observable.range(1,15);


filterExample
    .filter( n => n%5 == 0)
    .subscribe( a => console.log(a))