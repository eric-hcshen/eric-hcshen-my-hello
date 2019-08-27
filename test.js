var Rx = require('rxjs/Rx');
var source = Rx.Observable
    .create(function(observer) {
        observer.next('Jerry');
        observer.next('Anna');
        observer.complete();
    });
	
source.subscribe({
    next: function(value) {
    	console.log(value)
    },
    complete: function() {
    	console.log('complete!');
    },
    error: function(error) {
    console.log(error)
    }
});
var source = Rx.Observable.interval(1000);
var example = source.take(3);

example.subscribe({
    next: (value) => { console.log(value); },
    error: (err) => { console.log('Error: ' + err); },
    complete: () => { console.log('complete'); }
});