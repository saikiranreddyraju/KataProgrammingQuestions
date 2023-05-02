/*
SantaClausable Interface:

You probably know, that in Javascript (and also Ruby) there is no concept of interfaces.
There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. 
We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.

Rules
The SantaClausable interface is implemented, if all of the following methods are defined on an object:
sayHoHoHo() / say_ho_ho_ho
distributeGifts() / distribute_gifts
goDownTheChimney() / go_down_the_chimney
*/

function isSantaClausable(obj) {
    return ((typeof obj.sayHoHoHo === 'function' || typeof obj.say_ho_ho_ho === 'function') &&
      (typeof obj.distributeGifts === 'function' || typeof obj.distribute_gifts === 'function') &&
      (typeof obj.goDownTheChimney === 'function' || typeof obj.go_down_the_chimney === 'function'));
}

var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

console.log(isSantaClausable(santa));     // must return TRUE
console.log(isSantaClausable(notSanta)); // must return FALSE