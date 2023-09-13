// Giant Robot class
// Goal creat an interface with a methods 
// All Robots have name, power and type. 
// Kaiju should have a describe method that 
// prints: name:<name> type:<type> power:<power>
// Timer with count
// Goal creat a function that takes another function as an argument
function setTimeoutCount(callback, time, count) {
    var timer = setTimeout(function () {
        count -= 1;
        callback();
        if (count === 0) {
            clearTimeout(timer);
        }
    }, time);
}
setTimeoutCount(function () {
    console.log('???');
}, 1000, 3);
