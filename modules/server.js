var http = require('http');
var colors = require('colors');

var handlers = require('./handlers');

function start() {
  function onRequest(request, response) {
    console.log("Odebrano zapytanie.".green);
    console.log("Zapytanie " + request.url + " odebrane.");

    response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
    switched(request,response);
  }

  http.createServer(onRequest).listen(9000);

  console.log("Uruchomiono serwer!".green);
}

function switched(request,response) {
    switch (request.url) {
        case '/':
        case '/start':
            handlers.style(request, response);
            handlers.welcome(request, response);
            break;
        case '/upload':
            handlers.upload(request, response);
            break;
        case '/show':
            handlers.show(request, response);
            break;
    }
}

exports.start = start;