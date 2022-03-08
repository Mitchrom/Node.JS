let http = require('http')
let url = require('url');
let fs = require('fs');

//permet de lire plusieurs fichiers HTML sur le même localhost
http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let fichier = "." + q.pathname;
    console.log(fichier);
    fs.readFile(fichier, (err, data) => {
        if (err){
            res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            res.end('Erreur 404...');
        }else{
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(data);
            res.end();
        }
    })
}).listen(8080);




















































//let adr = 'localhost:8080/random1.html'
//let q = url.parse(adr, true);
//console.log(q.host);
//console.log(q.pathname);
//console.log(q.search);
//let data = q.query;
//console.log(data);
//console.log("Je m'appelle " + data.name + ". J'ai " + data.age + "ans.");
    //ici, écrire le lien ainsi => "localhost:8080/?name=xxx&age=yyy"
    //let query = url.parse(req.url, true).query
    //url.parse donne l'analyse du l'url de la requête
    //en ajoutant .query après la parenthèse, la requête est renvoyée sous format object
    //console.log(query);
    //let res2 = "Je m'appelle " + query.name + ". J'ai " + query.age + "ans."
    //res.end(res2); //fin de la réponse

