
const os=require('os');
const path=require('path');
// directories
console.log(os.homedir());
console.log(__dirname); //to get directory to base folder path.dirname(__filename)
console.log(__filename); // to get full dirctory to base file ===path.basename(__filename)
console.log(path.extname(__filename)); // to get extinsion of filename
console.log(path.parse(__filename)); // __ for current file
// importing custom module
const {add,subtract}=require('./api')
console.log(add(2,2));
// File system
const fs=require('fs');
fs.readFile('./data.txt',(err,data)=>{
    if(err) throw err
    console.log(data.toString())
})

