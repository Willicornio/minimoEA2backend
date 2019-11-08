const mongoose = require('mongoose');
const { Schema } = mongoose;



const SubjectSchema = new Schema({

    name: { type: String, required: true},
    students: {type: []}

})

module.exports = mongoose.model('Subject', SubjectSchema);