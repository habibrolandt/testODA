const mongoose=require('mongoose');
const bcrypt = require('bcrypt');

const tachesSchema = new mongoose.Schema({  
    title: String,
    description: String,
    status: String,
    date: Date,
});
const taches = mongoose.model('taches', tachesSchema)