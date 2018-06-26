//Creating Observable from keyboardInput
// while creating this you have to use process
// for ^c you have to put condition for exit proccess
        //Otherwise it console it not terminate

//


import Rx from 'rxjs';

const stdIn = process.stdin;
stdIn.setRawMode(true);
stdIn.setEncoding('utf-8');

const keybordObser = Rx.Observable.fromEvent(stdIn, 'data');

keybordObser
    .subscribe( key => {
        if(key === '\u0003')
            process.exit();
        
        console.log("Key input ",key);
    })