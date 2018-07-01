const app = require('express')();
const http = require('http').Server(app);
const serveStatic = require('serve-static');
const port = 8889;

app.use(serveStatic(`${__dirname}/`));

http.listen(port, () => console.log(`listening on *:${port}`));
