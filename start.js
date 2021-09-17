const chokidar = require('chokidar');
const zipperMerge = require('./plugin');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.listen(8000, async () => {
    await zipperMerge();
});
