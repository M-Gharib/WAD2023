/* 
Try to use Node in the terminal
> node // you enter the enviroment
> name = "jack" // declaring a string variable that contain the value "jack"
'jack'
> name  // reaching out for the value of the name -> "jack"
'jack'
>
*/

/* The "global" object */

/* 
console.log(global)
    // You can access the methods of the global object using the dot notation
global.setTimeout(() => {
    console.log('Hi there')
}, 1000);
// You can use the methods of the global object without refering to it
setTimeout(() => {
    console.log('Hi there again')
}, 2000);
 */

/* The os Module*/

/* 
// Include os module
const os = require('os');
// Returns the os object
console.log(os);
// Returns information about the operating system's platform
console.log("Platform: " + os.platform());
// Returns the operating system CPU architecture
console.log("Architecture: " + os.arch());
// Returns the name of the operating system
console.log("OS name: " + os.type()); 
*/

/* The fs Module*/
/* 
// Include fs module
const fs = require('fs');

//read a file Synchronously
const dataSync = fs.readFileSync('./file.txt', 'utf8');
console.log("File content:", dataSync);

//read a file Asynchronously 
fs.readFile('./file.txt', 'utf8', function(err, dataAsync) {
    if (err) throw err;
    console.log("File content:", dataAsync);
});

//write a file
//It replaces the file content if it exists. 
//If the file does not exist, a new file, containing the specified content, will be created.
fs.writeFile('./file2.txt', 'I have been modified', (err) => {
    if (err) return console.log(err);
    console.log("File content: modified");
});

//update a file
fs.appendFile('file2.txt', '\n This text is added by appendFile().', function(err) {
    if (err) throw err;
    console.log('File content: updated!');
});

//delete a file
fs.unlink('./file2.txt', (err) => {
    if (err) return console.log(err);
    console.log("File is deleted");
}); 
*/