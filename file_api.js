let fs = require('fs');

// fs.writeFileSync('out.txt','this should get written to file');
// console.log("this should print after previous line");

fs.writeFile('out.txt',' this should be written asynchronously',err => {
    console.log("this should print after previous line");
});

let myLoggerAPI = function(logmessage) {
fs.writeFile('out.txt',logmessage,() => {});
} 

myLoggerAPI('Log This');