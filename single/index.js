//single
//It work as a checker 
//if source Observable return more then onr value then return error
//if source return more then one value then hoe to solve
// single take a predicate



import Rx from 'rxjs';

Rx.Observable.range(1,10)
             .filter(n => n==5 || n==6)
             .single(n => n==5)
             //.single()
             .subscribe(a => console.log(a))