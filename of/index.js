import Rx from 'rxjs'

//Static
//Not necessary all of same type

Rx.Observable.of(1,2,"e",[66,7,8],6,{})
    .subscribe(e => console.log(e))


// Above Observale Contain array, String, Number, Object