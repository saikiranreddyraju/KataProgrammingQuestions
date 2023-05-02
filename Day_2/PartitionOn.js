/*
Partition On:
Write a function which partitions a list of items based on a given predicate.
After the partition function is run, the list should be of the form [ F, F, F, T, T, T ] where the Fs (resp. Ts)
                                        are items for which the predicate function returned false (resp. true).
NOTE: the partitioning should be stable; in other words: the ordering of the Fs (resp. Ts) should be preserved relative to each other.
For convenience and utility, the partition function should return the boundary index. In other words: the index of the first T value in item
*/

function partitionOn(pred, items) {
    var fa = items.filter( function(e) { return !pred(e);} );
    var tu = items.filter(pred);
    items.length = 0;
    for(var i = 0; i < fa.length; i++){ items.push(fa[i]); }
    for(var i=0; i < tu.length; i++){ items.push(tu[i]); }
    
    return fa.length;
}

var items = [1, 3, 6, 2, 8, 9, 11];
function isEven(n) {return n % 2 == 0}   //[1, 3, 9, 11, 6, 2, 8]
console.log(partitionOn(isEven,items));