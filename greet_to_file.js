
const fs = require('fs')

fs.writeFile('greeting.txt',"Hello World!", err => {
    if(err){
    console.log("when writing into a file error occured");
    }
});

