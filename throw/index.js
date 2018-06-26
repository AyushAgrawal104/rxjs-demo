// mainly use to throw a error and we can handle it
// Static
//No Complete Run


import Rx from 'rxjs';

const throwDemo = Rx.Observable.throw();


throwDemo
    .subscribe({
        next: a => console.log(a),
        complete: () => console.log("complete"),
        error: e => console.log("Error Occured",e)
    })