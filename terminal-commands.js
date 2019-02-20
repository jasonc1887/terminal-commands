const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('newfile.txt', 'This is a new file', 'utf8', (err) => {
    if (err) throw err;
    console.log('New File Saved!');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('/newdirectory', (err) => {
    if (err) throw err;
    console.log('New Directory Created!');
  });
};
