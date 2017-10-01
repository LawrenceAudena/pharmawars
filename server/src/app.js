//required pkages
const express = require('express'),
    helmet = require('helmet'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    routes = require('./Routes/routes');

//instance of express app
const app = express();
app.use(routes);

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());




app.listen(process.env.PORT || 8300, () => {
    console.log('server started on port 8300');
});