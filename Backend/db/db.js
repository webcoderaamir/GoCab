const mongoose = require('mongoose');

function connectToDB() {
    mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch(err => console.error(err));
};

module.exports = connectToDB;