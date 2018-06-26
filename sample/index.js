//sample
//Emmit new value from source in specific time interval
//In perameter it take a Observanble
//not equal to _.sample  --> return rondom value from source
import Rx from 'rxjs';

Rx.Observable
    .interval(1000)
    .sample(Rx.Observable.interval(5000))
    .subscribe(a => console.log(a))

