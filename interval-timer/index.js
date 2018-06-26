    import Rx from 'rxjs';

    let ticker = Rx.Observable.interval(1000);

    ticker.subscribe( a => console.log(`A ${a}`));


    let stopWatch = Rx.Observable.timer(2000)

    stopWatch.subscribe( a => console.log(`B ${a}`))

    let stopWatch2 = Rx.Observable.timer(2000,1000)

    stopWatch2.subscribe( a => console.log(a))
