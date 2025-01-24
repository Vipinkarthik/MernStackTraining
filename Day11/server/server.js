import { createServer } from 'http';  
const server = createServer((req, res) => {  
  res.end('Server is Running');
});
const port =3000;
server.listen(port);
