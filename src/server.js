const app = require('./app');
const http = require('http');
const dotenv = require('dotenv');

dotenv.config();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
