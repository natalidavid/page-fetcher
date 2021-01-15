const request = require('request');

const fs = require('fs');

let url = process.argv[2];

request(url[0], callback(error, response, body) {
  fs.writeFile(url[1], body, (error) => {
    console.log(`Downloaded and saved ${body.length} bytes to ${url[1]}`);
  })
});

