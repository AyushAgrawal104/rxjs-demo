// Able to Create new Observable 
// Every thing under Control
//custom Operator
// next, Complete, Error
//Not too much code inside it

import Rx from 'rxjs';

const customObservable = Rx.Observable.create(observer => {
    setInterval(()=> {
        observer.next("Demo");
    },500)
    observer.complete();
})


customObservable
    .subscribe({
        next: a => console.log("Next",a),
        //complete: b => console.log("Complete")
    });