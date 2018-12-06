const express = require('express');
const app = express();
const users = require('./users.js');
const pictures = require('./pictures.js');
const posts = require('./posts.js');

app.use('/users', users);
app.use('/posts', posts);
app.use('/pictures', pictures);

app.get('*', (req, res) => {
    res.status(404).json({
        message: Error
    });
});

app.listen(7000, () => {
    console.log('Server 7000 is running.')
})