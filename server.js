const express = require('express');
const dotenv = require('dotenv');
const postRouter = require('./routes/postsRouter');

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use('/', postsRouter);

app.use(express.json());

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});