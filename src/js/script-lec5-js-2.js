window.onload = function() {

    document.querySelector("h1").style.fontSize = '90px';

    /* 
        //function declaration 
        function sayMyName(name = 'No name was provided') {
            return name
                // Be careful about using the return, the return statement stops the execution of a function and returns a value.
                // this means there is an automatic semicolon insertion after the return term
                // this means if you wrote ther name to be returned on a new line after the return term, 
                // nothing will be retured because the program will virtually "insert" a semicolon after the return
                // terminating the exectuion of the rest of the code

        }

        //function invocation
        //sayMyName('Sarah')

        //Built-in funtion - console.log
        console.log(sayMyName('Sarah'));


        function sayMyNames(fname, mname, lname) {
            return `My name is ${fname} ${mname} ${lname}`;
            // Template literals allow variables in strings:
            // https://www.w3schools.com/js/js_string_templates.asp
        }
        console.log(sayMyNames('Sarah', 'J.', 'Jones'));

        // rest parameter
        function sayMyNameRestParm(...names) {
            return names
        }
        console.log(sayMyNameRestParm('Sarah', 'J.', 'K.', 'Jones'));


        //anonymous functions
        let fun = function(name) {
            return name
        }
        console.log(fun('John'));



        // Anonymous function –> arrow function 
        let funArrow = (name) => {
            return name;
        }
        console.log(funArrow('John Arrow')); 
    */



    // Nested function 
    /* 
        // Ex 1
        function sayHiToMe(fName, lName) {
            let msg = `Hi`;
            // Nested Function
            function composeMsg() {
                msg = `${msg} ${fName} ${lName}`;
            }
            composeMsg();
            return msg;
        }
        console.log(sayHiToMe("Jane", "Doe"));

        // Ex 2
        function sayHiToMe(fName, lName) {
            let msg = `Hi`;
            // Nested Function
            function composeMsg() {
                return `${msg} ${fName} ${lName}`;
            }
            return composeMsg();
        }
        console.log(sayHiToMe("Jane", "Doe"));

        // Ex 3
        function sayHiToMe(fName, lName) {
            let msg = `Hi`;
            // Nested Function
            function composeMsg() {
                function composeName() {
                    return `${fName} ${lName}`;
                }
                return `${msg} ${composeName()}`;
            }
            return composeMsg();
        }
        console.log(sayHiToMe("Jane", "Doe"));
    */

    // arrow function - no param
    /*     
        let sayHi = () => {
            return 'hi';
        } 
    */

    //let sayHi = () => 'hi';

    let sayHi = _ => 'hi';

    console.log(sayHi());

    // Arrow function + one param
    /*     
    let funArrow = (name) => {
        return name;
    } 
    */

    // Arrow function + one param
    let funArrow = name => name;

    console.log(funArrow('John Arrow'));



    /* Scopes */

    var a = 10;
    let b = 20;

    function sayHiToMe(fName, lName) {
        let msg = `Hi`;

        function composeMsg() {
            function composeName() {
                return `${fName} ${lName}`;
            }
            return `${msg} ${composeName()}`;
        }
        return composeMsg();
    }
    console.log(`a = ${a}, b =  ${b}`);
    //console.log(msg); //error
    console.log(sayHiToMe("Jane", "Doe"));



    /* 
    Higher-order functions - map()
    Syntax:     array.map(function(currentValue, index, arr), thisValue)

    Parameters:
    function()  - Required - a function to be run for each array element.
    currentValue – Required - the value of the current element.
    index  - Optional - the index of the current element.
    arr  - Optional - the array of the current element.

    Return Value: 
    An array The results of a function for each array element.
    */

    let numArr = [1, 2, 3, 4, 5];

    newArrMap = numArr.map((a) => a + 1);
    console.log(newArrMap);

    /* 
    Higher-order functions - filter()
    Syntax:     array.filter(function(currentValue, index, arr), thisValue)

    Return Value: 
    An array with all elements that pass the test implemented by the provided function
    */

    newArrFilter = numArr.filter((a) => a % 2 === 0);
    //newArrFilter = numArr.filter((a) => a + 1); // .filter() expects you to provide a condition, if you provide a statemet that return true for all elements, the arracy will not be changed
    console.log(newArrFilter);

    /* 
    Higher-order functions - reduce()
    Syntax:     array.reduce(function(accumulator, currentValue), initialValue)

    Return Value: 
    a single value
    */
    newArrReduce = numArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(newArrReduce);


    /* 
    Higher-order functions - forEach()
    Syntax:     array.filter(function(currentValue, index, arr), thisValue)

    Return Value: 
    undefined
    */
    newforEach = numArr.forEach((a) => console.log(a));
    console.log(newforEach); // undefined


    /* Objects */

    const person = {
        // Properties 
        name: ['Bob', 'Smith'],
        age: 32,
        gender: 'male',
        interests: ['music', 'skiing'],
        // Methods
        bio: function() {
            console.log(this.name[0] + ' ' + this.name[1]);
        }
    };

    person.bio();
    //Dot notation
    console.log(person.age);
    console.log(person.gender);
    //Bracket notation
    console.log(person['age']);
    console.log(person['gender']);

    person.age = 34;
    console.log(person['age']);





    /* Creating a new object with the new keyword*/

    let human = new Object({
        name: 'John',
        age: 21,
    });

    human.gender = 'male';

    human.sayMyName = function() {
        return this.name;
    };

    console.log(human);
    console.log(human.sayMyName());

    /* Creating a new object with the create method*/

    let newHuman = Object.create(human);
    console.log(newHuman);

    /* Creating a new object with the assign method*/
    let newHuman2 = Object.assign(human);
    console.log(newHuman2);

    /* Object constructor function */
    //You can convert to ES2015 class
    /*     
    function Person(first, last, age) {
        this.name = {
            first: first,
            last: last
        };
        this.age = age + 5;
        this.bio = function() {
            return `${this.name.first} ${this.name.last}`;
        };
    }
    const bob = new Person('Bob', 'Smith', 32)
    console.log(bob);
    console.log(bob.bio()); 
    */

    /* Object constructor function */
    class Person {
        // Static property
        static count = 0;
        constructor(first, last, age) {
                this.name = {
                    first: first,
                    last: last
                };
                this.age = age + 5;
                // Related to static property
                Person.count++;
                this.bio = function() {
                    return `${this.name.first} ${this.name.last}`;
                };
            }
            // Static method
        static countInstances() {
            return `${this.count} instances created`;
        }
    }
    const bob = new Person('Bob', 'Smith', 32)
    console.log(bob);
    console.log(bob.bio());
    // Static Property
    console.log(Person.countInstances());

    class SuperHero extends Person {
        constructor(first, last, superpower) {
            super(first, last);
            this.sp = superpower;
        }
    }

    const batman = new SuperHero('Bruce', 'Wayne', 'rich')
    console.log(batman);



    /*  Generator Functions  */

    function* generateNumbers() {
        yield 1;
        console.log("I'm after yield 1");
        yield 2;
        console.log("I'm after yield 2");
        yield 3;
        console.log("I'm after yield 3");
        yield 4;
        console.log("I'm after yield 4");
    }

    let generator = generateNumbers();

    console.log(generator.next());
    //console.log(generator.next());
    //console.log(generator.next());
    //console.log(generator.next());
    //console.log(generator.next());


    /* Regular expressions (RegExp)  

   Creating regular expressions

1- Regular Expression Constructor:
   Syntax:
          new RegExp(pattern[, flags])
   Ex: var regexConst = new RegExp('abc');
2- Regular Expression Literal:
   Syntax:
          /pattern/flags
   Ex: var regexLiteral = /abc/;

   Flags
    i — Case-insensitive search  // /abc/i 
    g — Global search, don’t return after the first match // /abc/g
   For complete list of flags:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

   To test how it works, we need to understand the match() method
The match() method retrieves the result of matching a string against a regular expression.
*/

    let str = "Welcome to the WAD course - the wad team";

    //let regex = /wad/;
    //let regex = /wad/i;
    let regex = /wad/ig;

    console.log(str.match(regex));


    /* Regular expressions (RegExp)  Ranges 

    (X|Y)  any of the alternatives separated with "|",  X, Or Y 
    [0-9]  any number from 0 to 9
    [^0-9] any character that is not 0 To 9
    [a-z]  any lowercase character from a to z
    [^a-z] any character that is not a lowercase character from A to Z
    [A-Z]  any uppercase character from a to z
    [^A-Z] any character that is not an uppercase character from A to Z
    [abc]  Find any of the characters between the brackets	
    [^abc] Find any characters that is not between the brackets

        The test() method is a RegExp expression method.
        It searches a string for a pattern, and returns true or false, depending on the result. 
    */



    let str2 = "Web2022App";
    let regex2 = /[beW][0-2]0[0-2][0-2][A-Z][a-z][a-z]/;
    console.log(regex2.test(str2));

    /* Regular expressions (RegExp) - Character classes

       .   matches any character, except newline or line terminators.
      \w   matches word characters. [a-z, A-Z, 0-9,  and Underscore]
      \W   matches Non word characters
      \d   matches digits from 0 to 9.
      \D   matches non-digit characters.
      \s   matches whitespace character.
      \S   matches non whitespace character.
      \b   matches at the beginning or end of a word.
      \B   matches NOT at the beginning/end of a word.
    */


    let str3 = "Web 2022 App";
    let regex3 = /.\w\w\s\d\d\d\d\s[A-Z][a-z]\S/;
    console.log(regex3.test(str3));
    let regex4 = /\bWeb\s\d\d\d\d\s\bApp/;
    console.log(regex3.test(str3));
    console.log(regex4.test(str3));


    /*   Regular expressions (RegExp) -  Quantifiers (define quantities):
        n+	 any string that contains at least one n
        n*	 any string that contains zero or more occurrences of n
        n?	 any string that contains zero or one occurrences of n

        n{x}   a string containing x numbers of n
        n{x,y} a string containing a range from x to y numbers of n
        n{x,}  a string containing at least x numbers of n

        ^      a string starting with "something"
        $      a string ending with "something"
        ?=     a string  followed by "something"
        ?!     a string  not followed by "something"

    */

    let regex5 = /\w+\s\d+\s\w+/;
    console.log(regex5.test(str3));

    let regex6 = /\w{3}\s\d{4}\s\w{3}/;
    console.log(regex6.test(str3));

    let regex7 = /^Web\s\d{4}\s\w{2}p$/;
    console.log(regex7.test(str3));
    let regex8 = /^Web\s\d{4}\s\w{2}(?=p)/;
    console.log(regex8.test(str3));




}