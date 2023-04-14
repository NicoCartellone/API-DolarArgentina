const express = require('express');
const cheerio = require('cheerio')
const request = require('request')

const app = express()

app.get('/', async (req, res) => {
    res.send('Api dolar Argentina')
})

app.get('/dolar', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    request('https://dolarhoy.com/', (err, resr,body) => {
        if(!err && resr.statusCode == 200){
            let $ = cheerio.load(body);
            const elementos = $(".val")
            let contenidoElementos = []
            elementos.each(function(i,el){
                contenidoElementos.push(
                    encodeURI($(this).text()))
            });
            res.send({"blue": {
                "compra": contenidoElementos[0],
                "venta": contenidoElementos[1]
            },
            "oficial": {
                "compra": contenidoElementos[4],
                "venta": contenidoElementos[5]
            },
            "bolsa": {
                "compra": contenidoElementos[6],
                "venta": contenidoElementos[7]
            },
            "liqui": {
                "compra": contenidoElementos[8],
                "venta": contenidoElementos[9]
            },
            "cripto": {
                "compra": contenidoElementos[10],
                "venta": contenidoElementos[11]
            },
            "solidario": {
                "compra": contenidoElementos[12]
            },
        })
        }
    })
})

app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });