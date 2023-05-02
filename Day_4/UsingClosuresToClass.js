/*
Using closures to share class state:
In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. 
The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20

But that's not all. Cats can change weight.
Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly 
even as instances change their weight value:

felix.weight = 25;
felix.weight // 25
Cat.averageWeight(); // now 25
Object.defineProperty must be used to pass all tests.
Storing a reference to all instances and recalculating the average weight each time is easier,
but would prevent garbage collection from working properly if used in a production environment.

Finally, since average weight is an aggregate statistic it's important that we validate constructor arguments so that no cats are created without a specified weight;
so, make sure to throw an error if both arguments are not recieved by the constructor.

Summary of requirements:
Cat constructor, requiring arguments for name and weight
Throw an error if name or weight not specified when invoking the constructor.
Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
Must use Object.defineProperty
*/

// Let's make a Cat constructor!
var Cat = (function () {
    var cats = {
      count: 0,
      totalWeight: 0,
      avgWeight: 0
    }
    
    function CatConstructor (name, weight) {
      if (!name || !weight) {
        throw new Error('Both `name` and `weight` should be provided.');
      }
      cats.count++;
      this.name = name;
  
      Object.defineProperty(this, 'weight', {
        get: function () {
          return this._weight || 0;
        },
        set: function (val) {
          cats.totalWeight = cats.totalWeight - this.weight + val;
          cats.avgWeight =  cats.totalWeight / cats.count;
          return this._weight = val;
        }
      });
  
      this.weight = weight;
    }
    
    CatConstructor.averageWeight = function () {
      return cats.avgWeight;
    }
    return CatConstructor;
} ());

let garfield = new Cat('garfield', 25);
console.log(Cat.averageWeight()); // 25

let felix = new Cat('felix', 13);  // 25 + 15
console.log(Cat.averageWeight());  // Avg: 20


let felix1 = new Cat('flex1');        // Thrown an Error       
console.log(Cat.averageWeight());
