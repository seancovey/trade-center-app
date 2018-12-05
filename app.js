const path = require('path');
const express = require('express');

const app = express();

const sequelize = require('./utils/database');
const {optionGroup,
    Option, 
    productOption,
    Product,
    Category,
    Condition,
    Image,
    categoryOption} = require('./models/product');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.set( 'view engine', 'ejs');
app.set( 'views', 'views');

app.use('/admin', adminRoutes);
app.use(shopRoutes);

optionGroup.hasMany(Option, { as: 'TheOptionGroup_id'});
optionGroup.hasMany(productOption, { as: 'proOptionGroup_id'});
Option.hasOne(productOption, { as: 'optValID'});
Product.hasMany(productOption, { as: 'proID',});
Category.hasMany(Product, { as: 'cateID'});
Condition.hasOne(Product, { as: 'condtID'});
Image.belongsTo(Product);
Category.belongsToMany(optionGroup, {through: categoryOption, uniqueKey: 'catOpts'}, { as: 'categoryHasOpts', foreignKey:Category.categoryID, constraints: false});
// optionGroup.belongsToMany(Category,{ through: categoryOption, unique: false}, {as: 'optsForCategory', foreignKey: optionGroup.optionGroupID, constraints: false});

app.use(express.static(path.join(__dirname, 'public')));

sequelize
    .sync({force:true})
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
app.listen(3000);