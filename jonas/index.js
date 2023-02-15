const fs = require('fs');

//synchronous or blocking code system
const firstText = fs.readFileSync('../content/first.txt', 'utf8');
console.log(firstText);
fs.writeFileSync('../content/second.txt', `Status: ${firstText}. \nCreated on ${Date.now()}`); 
console.log('file written!');  

//Asynchronous or non-blocking code system
fs.readFile('../content/result.text', 'utf8', (err, data) => {
    console.log(data);
});
console.log('Reading file...'); 

fs.readFile('../content/start.txt', 'utf8', (err, data1) => {
    fs.readFile(`../content/${data1}.txt`, "utf8", (err, data2) => {
      console.log(data2);
      fs.readFile('../content/mexican.txt', 'utf8', (err, data3) => {
        console.log(data3) ; 
      });
    });
});
