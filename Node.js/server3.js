//fusion des deux codes précédents


let http = require('http')
let fs =  require('fs')
let url = require('url')

let server = http.createServer()
server.on('request', (request, response) => {

    response.writeHead(200)

    let query = url.parse(request.url, true).query;
    let name = query.name === undefined ? ' !' : query.name;

    fs.readFile('index.html', 'utf-8', (err, data) => {

        if (err) {
            response.writeHead(404, {
                'content-type': 'text/html; charset=utf-8'
            })
            response.end('Fichier introuvable')
        } else {

            response.writeHead(200, {
                'content-type': 'text/html; charset=utf-8'
            });
            
            data = data.replace('{{ name }}', name)
            response.end(data)
        }

    })


})


server.listen(6969)