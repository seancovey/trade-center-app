const path = require('path');
const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

app.set( 'view engine', 'ejs');
app.set( 'views', 'views');
const shopRoutes = require('./routes/shop');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);