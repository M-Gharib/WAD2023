window.onload = function() {

    document.querySelector("h1").style.fontSize = '90px';

    /* console - output to screen*/

    /*  
        console.log("message");
        console.error("error");
        console.table(["column1", "column2", "column3"]);
        console.table({ firstMessage: "error", secondMessage: "message" }); // objects

        //methods of console can be found at https://developer.mozilla.org/en-US/docs/Web/API
    */

    /* Data Types */

    /* 
    //String
    console.log("Web Application Development");
    console.log("is of type " + typeof "Web Application Development");
    //You can use the typeof operator to find the data type of a JavaScript variable.

    //Number
    console.log(1000);
    console.log("is of type " + typeof 1000);

    //Array -> Object. It is considered as an object 
    console.log([10, 15, 17]);
    console.log("is of type " + typeof [10, 15, 17]);

    //Object
    console.log({ name: "Sarah", age: 17, country: "Estonia" });
    console.log("is of type " + typeof { name: "Sarah", age: 17, country: "Estonia" });

    //Boolean
    console.log(true);
    console.log("is of type " + typeof true);

    //Null -> Object. There is no datatype as null
    console.log(null);
    console.log(typeof null);

    //Undefined
    console.log(undefined);
    console.log(typeof undefined);

    //function
    console.log(typeof
        function() {});

    */

    /* variables */

    /*     
        let name1 = "John";
        console.log(name1);

        name2 = "Sarah";
        console.log(name2);

        console.log(name3); */

    /* let vs var */

    /* 
        console.log(name4);
        let name4 = "Susan"

        console.log(name5);
        var name5 = "Lara" 
    */

    /*    

    Var:
    - Redeclare: allowed 
    - Access before declare (No error, but undefined)
    - Function-scoped

    var foo = true;
    if (foo) {
        var bar = foo * 2;
        console.log(bar);
    }

    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(bar); // 2
    console.log(i); // 10  
     */

    /*  

    let:
    - Redeclare: not allowed  (Error)
    - Access before declare (Error)
    - Block-scoped


    let foo = true;

    if (foo) {
        let bar = foo * 2;
        console.log(bar);
    }

    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(bar); // ERROR
    console.log(i); // ERROR 
    */


    /*
    Const
    - Redeclare: not allowed  (Error)
    - Reassign value (Error)
    - Access before declare (Error)
    - Block-scoped
    */

    /* 
    const daysInWeek = 7;
    console.log(daysInWeek);
    */


    /* String */

    /* 
    console.log('Web Application Development WAD');
    console.log("Web Application Development WAD");
    console.log('Web Application Development "WAD"');
    //string escape charachter 
    console.log('Web Application Development \"WAD\"');
    //string \n newline
    console.log("Web \n Application \n Development");

    let a = "Web Application";
    console.log(a.length);
    console.log(a.slice(0, 3));

    let c = a.replace("Web Application", "WAD")
    console.log(c);

    console.log(c.toLowerCase());
    console.log(c.toUpperCase());

    let b = "Development";
    c = a.concat(" ", b);
    console.log(c);

    let d = "  trim  "
    console.log(d.trim());
    console.log(d.trimStart());

    // turns a string into an array
    let e = d.split(" ")
    console.log(typeof e);
*/

    /*  Numbers Operators */
    /*
        console.log("WAD" + " " + "wad");
    
        console.log(1 + 2);
        console.log(1 - 2);

        // JavaScript uses the + operator for both addition and concatenation.
        // Numbers are added. Strings are concatenated.
    
        console.log(1 + "WAD"); // NaN
        console.log(typeof NaN); // number

        console.log(10 * -20);
        console.log(20 / 3);

        console.log(11 % 2); // Remove 1    
        console.log(2 ** 4); // ** Exponentiation (introduced in ES7)

        let x = 5;
        console.log(x == 5);

        console.log(x < 5);
        console.log(x >= 5);

        let y = 6;
        console.log(x **= y); 
        */


    /* let numbers = [556, 34, 5, 78, 6, 90, 113, 343, 54]
    numbers.sort();
    console.log(numbers[0]) */


    /*     Session 4: JavaScript - 1 */


    /* let userName = "Andy"
    let userAge = 45
    let userPets = ['Cat', 'Dog']
        // let userPets = ['Cat', 'Dog', 'Hamster'] 
    let userBalance = 1200
    const EVERY_DAY_SPENDING = 15.3
    let everyDaySpendingPerPet = 6
       // let everyDaySpendingPerPet = 2.4 
    let daysSurvived = 0

    //console.log("Text message", variable) allows you to write to the console

    console.log("User name", userName)
    console.log("User age", userAge)

    console.log("User balance", userBalance)
    console.log("Every day spending per Pet", everyDaySpendingPerPet)
    console.log("Days survived", daysSurvived)


    while (userBalance > 0) {

        let spending = EVERY_DAY_SPENDING + everyDaySpendingPerPet * userPets.length
        userBalance -= spending
        daysSurvived++
    }

    console.log("User have sufficient money for " + daysSurvived + " days") */



    /* Tasks: */
    /* 1. Complete the following function that takes a string (e.g., your name) and prints it to the console. 
    Then, print it letter by letter to the console, as shown in the snapshot: */


    /* 
    function nameVertical(name) {

        console.log(name);
        let nameLength = name.length;

        for (i = 0; i < nameLength; i++) {
            console.log(name[i]);
        }
    }

    nameVertical("Sarah"); 
    */


    /* 2. Complete the following function that takes a number and returns to which 
    HTTP response status grouped it belongs. */

    /* 
    function code(n) {
        return (n < 100) ? "Not a valid code" :
            (100 <= n && n <= 199) ? "Informational responses" :
            (200 <= n && n <= 299) ? "Successful responses" :
            (300 <= n && n <= 399) ? "Redirection responses" :
            (400 <= n && n <= 499) ? "Client error responses" :
            (500 <= n && n <= 599) ? "Server error responses" :
            "Not a valid code"
    }

    console.log(code(330));
    */

    /* 3. Complete the following function that takes two variables and compares them.

        The function should print to the console the values of the passed variables.
        If the two variables have the same values and they are of the same type, 
        the function should print to the console: The two variables have the same value and type
        If the two numbers have the same values but they are from different types,
        the function should print to the console: The two variables have the same value but not the same type 
        followed by the type of each of them, as follows: the type of var1 is var1 type
        Otherwise, the function should print to the console: The two variables do not have the same value nor the same type
     */

    /* 
    function compareVariables(var1, var2) {
        console.log("var1= " + var1);
        console.log("var2= " + var2);

        if (var1 === var2) {
            console.log("the two variables have the same value and type");
        } else if (var1 == var2) {
            console.log("the two variables have the same value but not the same type");
            console.log("the type of " + var1 + " is " + typeof var1);
            console.log("the type of " + var2 + " is " + typeof var2);
        } else {
            console.log("the two variables do not have the same value nor the same type");
        }
    }

    compareVariables(3, '3') 
    */



    /* 
    4. Write a function to print the Fibonacci Sequence up to a certain number (n). The Fibonacci sequence is a series of numbers that starts with 0, then, 1, and the next number in the sequence is calculated by adding the two numbers before it, the program should stop when the sum of these two numbers is bigger (>) than n.

        0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

        Your function should prints: Fibonacci Sequence: followed by the numbers. */

    /* 
        function fibonacci(n) {
            let n1 = 0,
                n2 = 1,
                nextNumber;

            console.log('Fibonacci Sequence:');
            console.log(n1); // print 0
            console.log(n2); // print 1
            nextNumber = n1 + n2;

            while (nextNumber <= n) {

                // print the next number
                console.log(nextNumber);

                // calculate the next number
                n1 = n2;
                n2 = nextNumber;
                nextNumber = n1 + n2;
            }
        }
        // pass diffrent numbers and test the result
        fibonacci(33)
     */





    /* Do it yourself */

    /* 1. Write a function to output the Fibonacci Sequence up to a certain number (n) as an array. */

    // Fibonnaci as an array

    /* 
        function fibonacci(n) {

            let fib = [0, 1];

            for (let i = 2; i <= n; i++) {
                fib[i] = fib[i - 1] + fib[i - 2];
                fib.push([i]);
                console.log(fib[i]);
            }

            return fib;
        }

        console.log(fibonacci(34));
     */

    /*     
        2.	Complete the following code so that the for loop works and output the content of the courses array to the console.
        Note: you cannot modify “for (;;)”, i.e., for(i = 0, i< courses.length, i++) is not an option. Also, you cannot use another type of loops. 
        You need to write the code that makes this for loop works.  
    */


    /*     
    let courses = ["WAD", "SoftwareEngineering", "WebSecurity", "OOP"];
    let i = 0;

    for (;;) {
        console.log(courses[i]);
        i++;
        if (i === courses.length) break;
    } */


};