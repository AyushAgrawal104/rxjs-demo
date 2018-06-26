// Emmit only when previous value diffrent then previous one
// ~~ is a floar Operator
import Rx from 'rxjs';

const disUntilChangeOpera = Rx.Observable.from([2,3,3,4,3,5,6,9,888,888,2,2,6,4]);

disUntilChangeOpera
    .do(a => console.log(a))
    .distinctUntilChanged()
    .subscribe( a=> console.log("OutValue",a))


