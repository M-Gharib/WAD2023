window.onload = function() {

    document.querySelector("h1").style.fontSize = '90px';

    /*   Synchronous   vs  Asynchronous Programming  */

    /*     
    Synchronous
    - Operations/statements are run/executed in sequence 
    - Each operation/statements must wait until the previous one is completed
    */

    /*     
        console.log("Synchronous");
        console.log("Task 1");
        console.log("Task 2");
        window.alert("Synchronous operation"); // Operations will wait the previous operations to complete before it starts that is why we used window.alert here because the after operations will not start until you answer the popup box 
        console.log("Task 3");
        console.log("Task 4");
        console.log("*********"); 
    */

    /*   
    Asynchronous
    - Operations/statements can run/executed in parallel
    - Each operation/statements does not need to wait until the previous one is completed, i.e., it can start while other operations are still being processed
   */

    /*  
        console.log("Asynchronous");
        console.log("Task 1");
        console.log("Task 2");
        setTimeout(() => console.log("Asynchronous operation"), 0); // It will not wait, it will continue executing other statements. Then, get back to it to execute it when the time is up
        console.log("Task 3");
        console.log("Task 4"); 
    */



    /* Callback hell - Pyramid of doom */

    /*     setTimeout(() => {
            console.log("CB1 - Do something");
            setTimeout(() => {
                console.log("CB2 - Do another thing");
                setTimeout(() => {
                    console.log("CB3 - Do another thing");
                    setTimeout(() => {
                        console.log("CB4 - Do a final thing");
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000); 
    */



    /* Promise 

    A promise is a special JavaScript object that provide a mechanism to links a “code” that produce a "result" 
    to a “code” that will consume this "result".

    It is expected that the “code” that will produce a "result"  will need some time to produce such  "result",
    but when this "result" is available, it should be provided to the "code" that will consume it.

    The constructor syntax for a promise object is:

    let promise = new Promise(function(resolve, reject) {//The resolve and reject arguments are callbacks functions provided by JavaScript, so we don’t need to create them. We should only call one of them when ready.
    // a function that is called the executor and tt contains the code which should produce the result after some time.
    });

    When new Promise is created, the executor runs automatically.     
    When it is finished, it calls resolve if it was successful or reject if there was an error, as follows:

    resolve(value) — if the function is finished successfully, and produce the result "value".
    reject(error)  — if an error occurred, error is the error object.


    The promise object returned by the new Promise constructor has these internal properties:

    state  — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
    result — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.


    There can be only a single result or an error by the executor.
    All further calls of resolve and reject are ignored, as follows:

    let promise = new Promise(function(resolve, reject) {
    resolve("done");
    reject("error"); // ignored
    });

    or

    let promise = new Promise(function(resolve, reject) {
    reject("error"); 
    resolve("done");// ignored
    });


   It works in a similar way to the "return" in a function, i.e., when we reach the return keyword the function execution is stopped and a value is returned
   
   By now, it should be clear that the main idea of creating the promise is sunning a function (the excuter), which will either complete successfully or produce an error.
   If it run successfully, resolve will be called and a "value" will be returend.
   Otherwise, reject will be called and an error will be produced.

   How do we deal with the result of the promise?

  .then syntax

  promise.then(
  function(result) {  code to deal with a successful result  },
  function(error) { code to deal with an error  }
  );

  If we’re interested only in successful completions, then we can provide only one function argument to .then:

 promise.then(
  function(result) {  code to deal with a successful result  },
  );


  If we’re interested only in errors, then we can use null as the first argument: 
  
   promise.then(
    null, 
    function(error) { code to deal with an error  }
    );

   Or we can use .catch(error)


   .finally() is used when a promise settles (fails or passes).

*/


    /*    const xhttpPromise = new Promise((resolveFunc, rejectFunc) => {
           //let connect = true;
           //let connect = false;
           if (connect) {
               resolveFunc("The connection established,  readyState === 4 and status === 200");
           } else {
               rejectFunc(Error("Connection and data fetch failed"));
           }
       });

       console.log(xhttpPromise);

       let resolved = (resolveValue) => console.log(`Good ${resolveValue}`);
       let rejected = (rejectValue) => console.log(`Bad ${rejectValue}`);

       xhttpPromise.then(resolved, rejected);

       xhttpPromise
           .then(
               (resolveValue) => console.log(`Good ${resolveValue}`),
               (rejectValue) => console.log(`Bad ${rejectValue}`)
           )
           .catch((rejectedReason) => console.log(rejectedReason))
           .finally(console.log("The operation is finished")); */


    /*     Call Stack, Event Loop, Call and Job Queues   */


    /*     function add(a, b) {
            console.log('Function add is called')
            return a + b;
        }

        function average(a, b) {
            console.log('Function average is called')
            return add(a, b) / 2;
        }

        setTimeout(() => console.log('a'), 0);


        let x = average(10, 10);

        console.log(x);

        setTimeout(() => console.log('b'), 0);

        new Promise((resolve, reject) => {
                resolve();
            })
            .then(() => {
                console.log('c');
            });
     */


    /*     console.log('Task 1: Sync');
        setTimeout(function() {
            console.log('Task 2: 1st callback - setTimeout');
        }, 0);
        var promise = new Promise(function(resolve, reject) {
            resolve();
        });
        promise
            .then(function(resolve) {
                console.log('Task 3: 1st Promise');
            })
            .then(function(resolve) {
                console.log('Task 4: 2nd Promise');
            });
        console.log('Task 5: Sync'); */





    /* AJAX */

    /*  let xhttp = new XMLHttpRequest();
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
        xhttp.send();
        console.log(xhttp);
        xhttp.onreadystatechange = function() {
            // console.log(xhttp.readyState);
            // console.log(xhttp.status);
            if (this.readyState === 4 && this.status === 200) {
                console.log(this.responseText);

                let posts = JSON.parse(this.responseText);
                // console.log(posts);
                for (let i = 0; i < posts.length; i++) {
                    let div = document.createElement("div");
                    div.className = 'post';
                    let postTitle = document.createElement("h3");
                    postTitle.innerText = posts[i].title;
                    div.appendChild(postTitle);
                    let postBody = document.createElement("p");
                    postBody.innerText = posts[i].body;
                    div.appendChild(postBody);

                    // let postBody2 = document.createTextNode(jsData[i].body);
                    // div.appendChild(postBody2);

                    document.body.appendChild(div);
                }
            };
        } */


    /* Fetch API */



    /* fetch('https://jsonplaceholder.typicode.com/posts')
        //fetch('../res/json/my.json') //Fetch data from local JSON file
        .then((response) => response.json())
        .then(json => {
            for (let i = 0; i < json.length; i++) {
                let div = document.createElement("div");
                div.className = 'post';
                let postTitle = document.createElement("h3");
                postTitle.innerText = json[i].title;
                div.appendChild(postTitle);
                let postBody2 = document.createElement("p");
                postBody2.innerText = json[i].body;
                div.appendChild(postBody2);
                document.body.appendChild(div);
            }
        }) */
    /* .catch(err => {
        let errDiv = document.createElement("div");
        errDiv.className = 'post';
        errDiv.innerText = err;
        document.body.appendChild(errDiv);
    }) */
    /* .finally(() => {
        let footer = document.createElement("footer");
        date = new Date().toLocaleString()
        footer.innerText = date;
        document.body.appendChild(footer);
    }) */




}