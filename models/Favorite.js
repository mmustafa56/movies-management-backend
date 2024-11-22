const mongoose = require("mongoose");


const favoriteSchema  = new mongoose.Schema({
    _id: mongoose.Types.ObjectId.toString(),
    moviesName: {
        types: String,
        default:""
    },

})