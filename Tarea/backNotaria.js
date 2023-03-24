var http = require('http');
fs1 = require('fs');
fs2 = require('fs');
fs3 = require('fs');

http.createServer(function(solicitud,respuesta){
    fs1.readFile('./IndexN.html',function(error,html){
        respuesta.write(html);
        respuesta.end();
    });

    fs2.readFile('./nosotros.html',function(error,html){
        respuesta.write(html);
        respuesta.end();
    });

    fs3.readFile('./nservicio.html',function(error,html){
        respuesta.write(html);
        respuesta.end();
    });

    
}).listen(8080);