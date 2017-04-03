const { mongoose } = require('../db/mongoose');

let AnnounceSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

let Announce = mongoose.model('Announce', AnnounceSchema);

module.exports = { Announce };