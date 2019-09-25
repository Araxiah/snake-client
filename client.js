const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541

  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log(`Successfully connected to game server\n`, data);


  });

  conn.on("connect", () => {
    //conn.write('Name: SNE');
    conn.write('Name: SNE');

  });

  conn.on('data', () => {
    console.log('you ded cuz you idled');
  });



  return conn;
};

module.exports = {
  connect,
};