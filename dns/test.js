const { TCPClient } = require('dns2');

const resolve = TCPClient({
  dns: '127.0.0.1'
});

(async () => {
  try {
    const result = await resolve('google.com');
    console.log(result.answers);
  } catch(error) {
    console.log(error);
  }
})();