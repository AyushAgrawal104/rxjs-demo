// It Like map
// It Work on Object
// Part of object we want to pass pluck that
// Only one Property

import Rx from 'rxjs';

let pluckObser = Rx.Observable.range(5,15);

pluckObser
    .mapTo({name:'ayush', work:'demo'})
    .pluck('name')
    .subscribe( a => console.log(a))