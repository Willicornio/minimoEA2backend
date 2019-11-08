const mongoose = require('mongoose');
const { Schema } = mongoose;



const StudentSchema = new Schema({


    name: { type: String, required: true},
    adress: { type: String, required: true},
    phones: { type: [], required: false},
    studies: {type: [], required: false},

})

module.exports = mongoose.model('Student', StudentSchema);