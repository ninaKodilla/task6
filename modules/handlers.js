var fs = require('fs');
var formidable = require('formidable');

exports.upload = function(request, response) {
    console.log("Rozpoczynam obsługę żądania upload.");
    var form = new formidable.IncomingForm();
    form.parse(request, function(error, fields, files) {
        fs.renameSync(files.upload.path, "test.png");
        fs.readFile('templates/upload.html', function(err, html) {
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
            response.write(html);
            response.end();
        });
    });
}

exports.welcome = function(request, response) {
    console.log("Rozpoczynam obsługę żądania welcome.");
    fs.readFile('templates/start.html', function(err, html) {
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    });
}

exports.error = function(request, response) {
    console.log("Nie wiem co robić.");
    response.write("404 :(");
    response.end();
}

exports.show = function(request, response) {
    fs.readFile("test.png", "binary", function(error, file) {
        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
}

exports.style = function(request, response) {
    fs.readFile('assets/style.css','utf-8', function (err, data) {
        response.writeHead(200, {'Content-Type': 'text/css'});
        response.write(data);
        response.end();
    });
}

exports.script = function(request, response) {
    fs.readFile('assets/script.js', function (err, data) {
        response.writeHead(200, {'Content-Type': 'text/javascript'});
        response.write(data);
        response.end();
        console.log(data)
    });
}
