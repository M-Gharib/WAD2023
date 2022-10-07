window.onload = function() {

    document.querySelector("h1").style.fontSize = '90px';

    /* Locating DOM elements  */

    let idEle = document.getElementById("span1");
    console.log(idEle);
    // retrieve the element with the specified id ("span1")  as an array

    let tagEles = document.getElementsByTagName("p");
    console.log(tagEles);
    console.log(tagEles[0]);
    // retrieve all elements with tagName P (<p>) as an array

    let classEle = document.getElementsByClassName("class1");
    console.log(classEle);
    console.log(classEle[0]);
    // retrieve all elements with a specified class name ("class1") as an array


    // CSS selectors 
    let cssEle = document.querySelector(".class1");
    console.log(cssEle);
    // retrieve the first element with the specified css selector

    let cssEles = document.querySelectorAll(".class1");
    console.log(cssEles);
    // retrieve all elements with the specified css selector 
    console.log(cssEles[1]);

    let cssEleName = document.querySelector('p[name]');
    console.log(cssEleName);
    // retrieve the element with the specified attribute 
    let cssElesName = document.querySelectorAll('p[name]');
    console.log(cssElesName);
    // console.log(cssEleName.textContent);
    // We also have access to the text content of the P element

    let cssEleNameVal = document.querySelector('p[name="para2"]');
    console.log(cssEleNameVal);
    // retrieve the element with the specified attribute that has the specified value

    /* Accessing elements + elements attributes */

    let idEleP = document.getElementById("p2");
    //<p id="p2" class="class2">This is a Paragraph <span id="span1"> This is a Span within a Paragraph </span></p>

    console.log(idEleP.textContent);
    // This is a Paragraph  This is a Span within a Paragraph 
    console.log(idEleP.innerHTML);
    // This is a Paragraph <span id="span1"> This is a Span within a Paragraph </span>
    console.log(idEleP.id);
    // p2
    console.log(idEleP.className);
    // class2
    console.log(idEleP.getAttribute("class")); //getAttribute  will return the value of the specified attribute
    // class2


    /*  Accessing element’s attributes */

    const attributes = idEleP.attributes; // returns NamedNodeMap{}
    console.log(attributes);

    //.hasAttribute()
    console.log(idEleP.hasAttribute("class") ? 'has a class attribute' : 'does not has a class attribute');

    //.hasAttributes() //no parametrs are required
    console.log(idEleP.hasAttributes() ? 'has  attributes' : 'does not have attributes');


    /* Modifying element’s attributes */

    // The HTML DOM allows JavaScript to change the style of HTML elements.

    console.log(idEleP.className = "class3"); //change an attribute directly
    // class3
    idEleP.setAttribute("class", "class4")
        //change an attribute through the setAttribute method
    console.log(idEleP.className);
    // class4

    //idEleP.removeAttribute("class")
    console.log(idEleP.className);
    // 


    /* CSS styling  */

    let evBtn = document.getElementById("btn");

    // set a CSS property
    //evBtn.style.color = "red";

    // remove a property 
    //evBtn.style.removeProperty("color");

    //set CSS properties
    //evBtn.style.cssText = "font-whight:bold; color:red;" // input as a text

    /* classList  */

    // set property  using .setProperty()
    evBtn.style.setProperty("font-size", "20px")
    console.log('classList');
    console.log(evBtn.classList.contains("show"));
    console.log(evBtn.classList.item("0"));

    // class toggle is very important 
    evBtn.onclick = function() {
        evBtn.classList.toggle("show");
        //evBtn.style.removeProperty("font-size");
        console.log(evBtn.classList.contains("show"));
    };


    /* Creating and appending elements  */

    let newElement = document.createElement("p"); // creates an element of the specified type
    let newAttr = document.createAttribute("name"); // creates a new attribute node, and returns it.
    let newText = document.createTextNode("New P element"); // creates a text Node
    let newComment = document.createComment("Just a new P element"); //createComment() creates a new comment node, and returns it.

    newElement.className = "class6";
    newElement.setAttributeNode(newAttr);
    newElement.setAttribute("name", "name1");

    //newElement.remove();  // to remove an element

    // Append textNode to an element
    newElement.appendChild(newText);

    // Append a comment to an element
    newElement.appendChild(newComment);

    // Append the element to the body of the document
    document.body.appendChild(newElement);

    // create and append an element (span) to the newly created p element
    let newSpanElement = document.createElement("span");
    newSpanElement.textContent = 'The new span';
    newElement.appendChild(newSpanElement);

    /* Before, After, Prepend, Append  */

    let li1 = document.getElementById("li1");

    let createNewLi = document.createElement("li");
    createNewLi.textContent = "This is the new list item";

    //li1.before(createNewLi); // inserts a set of Node or string objects in the children list of this Element's parent, just before this Element.
    //li1.after(createNewLi); //  inserts a set of Node or string objects in the children list of the Element's parent, just after the Element.
    li1.append(createNewLi); //  inserts a set of Node objects or string objects after the last child of the Element.
    //li1.prepend(createNewLi); //  inserts a set of Node objects or string objects before the first child of the Element. 






    /* Dealing with children */
    console.log('.children/.childNodes')
    console.log(newElement.children); //returns HTMLcollection with one element (span). Note: Element.children includes only element nodes

    console.log(newElement.childNodes); // returns a NodeList object that contains a collection (list) of the element's child nodes.

    console.log('first/lastChild')
    console.log(newElement.firstChild); // returns the first element's child nodes
    console.log(newElement.lastChild); // returns the last element's child nodes

    console.log('first/lastElementChild')
    console.log(newElement.firstElementChild); // returns the first element's child elements
    console.log(newElement.lastElementChild); // returns the last element's child elements






    /*   DOM Traversing  */

    console.log('DOM Traversing');

    console.log(li1);

    console.log(li1.nextSibling);
    console.log(li1.previousSibling);

    console.log(li1.nextElementSibling);
    console.log(li1.previousElementSibling);

    console.log(li1.parentElement);







    /*     DOM Events    */

    //  <button type="button" id="btn" onclick="console.log('button is clicked')">Click Me!</button>

    /* let evBtn = document.getElementById("btn");

    evBtn.onclick = function() {
        console.log("button is clicked");
        // document.getElementById('btn').textContent = "button is clicked";

    };

    evBtn.onmouseleave = function() {
        console.log("The cursor left the button");
        // document.getElementById('btn').textContent = "The cursor left the button";

    };

    evBtn.onmouseover = function() {
        console.log("The cursor is over the button");
        // document.getElementById('btn').textContent = "The cursor is over the button";
    };
    */








    /* AddEventListener */

    let btn2 = document.getElementById('btn2');

    function randomColorfun(ev) {
        if (ev.target.id === 'btn2') {
            var randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = randomColor;
        }
    }

    btn2.addEventListener('click', randomColorfun);

    var btn3 = document.getElementById('btn3');

    //removeEventListener
    btn3.addEventListener('click', function(ev) {
        if (ev.target.id === 'btn3') {
            btn2.removeEventListener('click', randomColorfun);
        }
    }, false); //false- Remove the handler from bubbling.




    // stopPropagation()
    let btnPro = document.getElementById('btnPro');
    let divBtnPro = document.getElementById('divBtnPro');

    btnPro.addEventListener('click', function(e) {
        console.log('The button was clicked!');
        e.stopPropagation();
    });

    divBtnPro.addEventListener('click', function() {
        console.log('The div was clicked!');
    });

    //prevent default
    let name = document.getElementById('nameForm');

    document.getElementById("myForm").addEventListener("submit", function(e) {
        if (name.value === '') {
            console.log("prevent submitting");
            e.preventDefault();
        }
    });

    /* BOM */




    /* Window object */

    document.getElementById("btnWin").addEventListener("click", function() {
        // window.innerWidth - the inner width of the browser window (in pixels)
        console.log(`Window innerWidth = ${window.innerWidth}`);
        console.log(`Window innerHeight = ${window.innerHeight}`);

        // The window.screen object can be written without the window prefix.
        // The screen.width property returns the width of the visitor's screen in pixels.
        console.log(`Screen width  = ${screen.width}`);
        console.log(`Screen height  = ${screen.height}`);

        console.log(`Screen availWidth  = ${screen.availWidth}`);
        console.log(`Screen availHeight  = ${screen.availHeight}`);

        // The Screen pixelDepth property is used for returning the color resolution of the visitor’s screen. 
        // It returns the color resolution in bits per pixel. It is an alias to the colorDepth property.
        // The depth of the screen's color palette in bits per pixel: 1 (1 bit per pixel), 4, 8, 15, 16, 24, 32, or 48.// usually 24
        // The color resolution in bits per pixel:
        console.log(`Screen pixelDepth  = ${screen.pixelDepth}`);
        console.log(`Screen colorDepth  = ${screen.colorDepth}`);

    });

    /* Window open  resizeTo resizeBy*/
    document.getElementById("btnWinOpen").addEventListener("click", function() {
        myExternalWindow = window.open("https://courses.cs.ut.ee/2022/WAD/fall", "myWindowName", "resizable");
        myExternalWindow.resizeTo(500, 500); //resize window to 500x500
        myExternalWindow.resizeBy(-100, -100); //make it smaller relatively by 100px
        myExternalWindow.moveTo(50, 50); //

        // Notes on resize
        // You can't resize a window that wasn’t created by window.open.
        // You can't resize a window  when it’s in a window with more than one tab.
        // To make window created by window.open() resizable, you must open it with resizable feature
    });



    /* Window object */
    document.getElementById("btnWinLoc").addEventListener("click", function() {
        console.log(`Window location href  = ${window.location.href}`);
        console.log(`Window location hostname  = ${window.location.hostname}`);
        console.log(`Window location pathname  = ${window.location.pathname}`);
        console.log(`Window location protocol  = ${window.location.protocol}`);
        console.log(`Window location protocol  = ${window.location.port}`);
    });

    /* History object */

    document.getElementById("btnWinHis").addEventListener("click", function() {
        // The window.history object allows you to access the history stack of the browser.
        // The history.length returns the number of URLs in the history stack.
        console.log(`history length  = ${history.length}`);

        // To navigate to a URL in the history, you use the back(), forward(), and go() methods.
        //history.back();
        //history.forward();
        //history.go();// positive numbers -> forward Negative numbers -> backwards

    });



    /* //Alert, Confirm, Prompt
    document.getElementById("btnBOM").addEventListener("click", function() {
        //Alert
        //    window.alert("Hello this is an alert");

        //Confirm
         let confirmMsg = window.confirm("Are You Sure?");
         if (confirmMsg === true) {
             console.log("OK pressed");
         } else {
             console.log("Cancel pressed");
         } 
        // Prompt
        let promptMsg = prompt("Enter your name");
        console.log(promptMsg);
    });


    //setTimeout 
    document.getElementById("btntime").addEventListener("click", function() {
        setTimeout(function() {
            console.log("set Timeout Msg");
        }, 3000);
    });

    function msg() {
        console.log(`Message to console`);
    }

    //setInterval(
    document.getElementById("btntime2").addEventListener("click", function() {
        setInterval(msg, 1000);
    });

    //clearInterval
    document.getElementById("btntime3").addEventListener("click", function() {
        clearInterval(counter);
    });

    let counter = setInterval(msg, 1000);
*/




}