const http = require('http');

const server = http.createServer((req,res)=>{
  if (req.url === '/') {
    res.end('Welcome my dear goat');
  }
  if (req.url === '/about') {
    res.end('here is our short history');
  }
  res.end(`
  <h1>Oops!</h1>
<p>we can't seem to find the page that you are looking for</p>
<a href="/">back home</a>  
  `)
})

server.listen(5050)