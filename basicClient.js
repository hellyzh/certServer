const axios = require('axios');
async function test(){
    const res =await axios.get('http://localhost:3000', {
        // Axios looks for the `auth` option, and, if it is set, formats a
        // basic auth header for you automatically.
        auth: {
          username: 'admin',
          password: 'password'
        }
      });
      console.log(res.status);
      console.log(res.data);
}
test();