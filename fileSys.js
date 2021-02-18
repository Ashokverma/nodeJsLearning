var fs = require('fs');

/* Append File If Does't Exist Then It will automatically created */

fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

/* Create Empty File  */

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
  }); 

/* Write File  */


fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  }); 

/* Specify The Content AT the end of the FIle  */

fs.appendFile('mynewfile1.txt', ' This is my text.', function (err) {
    if (err) throw err;
    console.log('Updated!');
  });


/* Replace the File  */


fs.writeFile('mynewfile3.txt', 'This is my text', function (err) {
    if (err) throw err;
    console.log('Replaced!');
  });


/* rename FIles */


fs.rename('mynewfile1.txt', 'Ashokverma.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });