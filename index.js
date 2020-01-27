const express = require('express');
const app = express();
const router = express.Router();

app.get('/',function(req,res) {
    res.sendFile('./index.html', { root : __dirname});
});

app.use('/', router);
app.use(express.static(__dirname));
app.listen(process.env.port || 8080);

console.log('Running at Port 8080');