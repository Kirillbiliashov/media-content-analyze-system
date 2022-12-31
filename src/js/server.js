const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/messages', require('./message_routes'));
app.use('/metadata', require('./metadata_routes'));

app.listen(PORT, () => console.log(`server started running at port ${PORT}`));


