const http = require('http');

const server = http.createServer(
  (request, response) => {
    response.writeHead(200, {
      'Content-Type': 'application/json',
    });
    const goods = [
      {
        title: 'Kettle',
        price: 1500,
        article: 'Z0000100612',
        weight: 1.5,
        manufacturer: 'China',
        hasDiscount: true,
      },
      {
        title: 'Pod',
        price: 1200,
        article: 'Z0000100323',
        weight: 0.9,
        manufacturer: 'Russia',
        hasDiscount: false,
      },
    ];
    response.write(JSON.stringify(goods));
    response.end();
  });



server.listen(3000);
