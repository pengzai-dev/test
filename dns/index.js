const dns2 = require('dns2');

const { Packet } = dns2;

const server = dns2.createUDPServer((request, send, rinfo) => {
  const response = Packet.createResponseFromRequest(request);
  const [ question ] = request.questions;
  const { name } = question;
  console.log(name);
  response.answers.push({
    name,
    type: Packet.TYPE.A,
    class: Packet.CLASS.IN,
    ttl: 300,
    address: '127.0.0.1'
  });
  send(response);
});

server.on('request', (request, response, rinfo) => {
  console.log(request.header.id, request.questions[0]);
});

server.listen(53);