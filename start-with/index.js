//When your Observable take time to mmit some thing and you want to emmit son=me thisng dummy
// Instantly Emmit That value then sourc=se Observable


import Rx from 'rxjs';

let startObser = Rx.Observable.timer(4000,200);

console.log("Start");
startObser
    .map( n => n+1)
    .startWith(0)
    .subscribe(a => console.log(a))

