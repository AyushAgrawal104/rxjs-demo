// map depend on comeing value
//mapto did not depend on coming value and assign a constant

import Rx from 'rxjs';

let mapEx = Rx.Observable.range(1,15)

mapEx.
    map( n => n*n)
    .subscribe(a => console.log(a))
    


mapEx.
    mapTo("Notification")
    .subscribe(a => console.log(a))