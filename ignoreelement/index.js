//ignore Element 
//ignore all the value (next)
//only run error or complete

import Rx from 'rxjs';


Rx.Observable
        .range(1,9)
        .ignoreElements()
        .subscribe({
            next: a=> console.log("Next",a),
            complete : a => console.log("Complet")
        })