import express from 'express';
const server = express();
import bodyParser from 'body-parser';
const port = 3000;
server.use(bodyParser.json());
const items=[{id:1,name:"Watch"},{id:2,name:"Braclet"},{id:3,name:"Jeans"}];  
server.get('/', (req, res) => {
  res.send('Server is Running');
});
server.get('/products', (req, res) => {
  res.send(items);
}); 
server.post('/products', (req, res) => {
  items.push({id:items.length+1,name:req.body.name});
  res.status(200).send(items);
});
server.listen(port, () => { 
    console.log(`Server is running on port http://localhost:${port}`);
});