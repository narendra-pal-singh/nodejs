var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello Joan!');
});
app.get('/settings', function (req, res) {
    res.send('Settings Page');
});
app.get('/settings/profile', function (req, res) {
    res.send('Profile Page');
});
app.get('/blogs', function (req, res) {
    res.send('All Blogs');
});
app.get('/blogs/:id', function (req, res) {
    res.send('View Blogs');
});
app.listen(8000, function () {
    console.log('Listening to Port 8080');
});
