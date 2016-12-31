console.log("callbacks");

var randomName = function() {
       var name = ['George', 'Mike', 'Joe', 'Natalie'];
       //RETURN A RANDOM NAME FROM THE name ARRAY
       //YOU CAN USE Math.random method
       var nameLength = name.length;
       var randomNumber = Math.floor(Math.random() * nameLength);
       console.log(randomNumber);
       var rName = name[randomNumber];
       return rName;
   }

    var say = function(saysomething) {
      console.log('Say ', saysomething());
    }
    var yell = function(yellsomething) {
      console.log('Yell ', yellsomething());
    }
    var eat = function(eatsomething) {
      console.log('Eat ', eatsomething());
    }

    var roll = function(rollsomething) {
      console.log ('Roll ', rollsomething());
    }

    function random_function(a, x, y, z, f) {     //the parameters can be anything, as long as they are used within the function
      //x,y,z,f parameters are FUNCTIONS, call these functions using a as parameter. LOOK AT EXAMPLE BELOW
      x(a);
      y(a);
      z(a);
      f(a);
    }

    random_function(randomName, say, yell, eat, roll);    //When you call the function make sure to use the correct function name. IMP!
    // Possible results include:
    // Roll George
    // Eat Ninja
    // Say Mike
    // Eat George
