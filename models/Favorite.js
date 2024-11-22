const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
     _id: {
        type: mongoose.Schema.Types.ObjectId, 
        default: () => new mongoose.Types.ObjectId(), 
    },
    movieName: {
        type: String,
        required: true,
        trim: true, 
    },
    movieId: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    genre: {
        type: String, 
        default: "Unknown",
    },
}, {
    timestamps: true, 
});

module.exports = mongoose.model("Favorite", favoriteSchema);
