const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const optionGroup =sequelize.define ( 'optionGroup', {
    optionGroupID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    optionGroupName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    notOptional: {
        type: Sequelize.BOOLEAN
    }
});

const Option = sequelize.define ( 'option', {
    optionID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    optionName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

const productOption = sequelize.define ( 'productOption', {
    productOptID:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    optionPriceIncrement: {
        type: Sequelize.DOUBLE
    }
});

const Product = sequelize.define('product', {
    productID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    productTitle: Sequelize.STRING,
    price: {
      type: Sequelize.DOUBLE,
      allowNull: false
    },
    shortDescription: {
      type: Sequelize.STRING,
      allowNull: false
    },
    longDescription: {
        type: Sequelize.STRING(2000),
        allowNull: false
    },
    productUploadedBy:{
        type: Sequelize.INTEGER
    },
    productLive: {
        type: Sequelize.TINYINT,
        allowNull:false
    },
    productStock: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    productThumb: {
        type: Sequelize.STRING
    }
  });

  const Category = sequelize.define ( 'category', {
      categoryID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      categoryName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      parent:{
        type: Sequelize.INTEGER
      }
  });

  const Condition = sequelize.define ('condition', {
    condID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    condValues: {
        type: Sequelize.STRING
    }
  });

  const Image =sequelize.define ('url', {
      imgID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      imgUrl: {
          type: Sequelize.STRING
      }

  });
  
  module.exports = Product;