//static
//Complete Imediatly
//For testing, CornerCases

import Rx from  'rxjs';

Rx.Observable.empty()
    .subscribe({
        next: a => console.log("Next",a),
        complete: a => console.log("Complete")
    })