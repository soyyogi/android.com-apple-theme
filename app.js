const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

const port = 3000 || process.env.PORT;

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: '.hbs',
    defaultLayout: 'index'
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('main', {title: 'Android | The platform pushing what’s possible'});
});

app.get('/phone', (req, res) => {
    res.render('phone', {
        layout: 'phone',
        title: 'Phones & Tablets | Android'});
});

app.get('*', (req, res) => {
    res.render('notfound', {
        layout: 'notfound',
        title: 'Not Found'
    })
})

app.listen(port);