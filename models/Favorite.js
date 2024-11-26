const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
  wrapperType: { type: String },
  userId:{type:mongoose.Schema.ObjectId,
    ref:"User"
  },
  kind: { type: String },
  collectionId: { type: Number },
  trackId: { type: Number, unique: false }, // Remove the unique constraint
  artistName: { type: String },
  collectionName: { type: String },
  trackName: { type: String },
  collectionCensoredName: { type: String },
  trackCensoredName: { type: String },
  collectionArtistId: { type: Number },
  collectionArtistViewUrl: { type: String },
  collectionViewUrl: { type: String },
  trackViewUrl: { type: String },
  previewUrl: { type: String },
  artworkUrl30: { type: String },
  artworkUrl60: { type: String },
  artworkUrl100: { type: String },
  collectionPrice: { type: Number },
  trackPrice: { type: Number },
  trackRentalPrice: { type: Number },
  collectionHdPrice: { type: Number },
  trackHdPrice: { type: Number },
  trackHdRentalPrice: { type: Number },
  releaseDate: { type: Date },
  collectionExplicitness: { type: String },
  trackExplicitness: { type: String },
  trackCount: { type: Number },
  trackNumber: { type: Number },
  trackTimeMillis: { type: Number },
  country: { type: String },
  currency: { type: String },
  primaryGenreName: { type: String },
  contentAdvisoryRating: { type: String },
  shortDescription: { type: String },
  longDescription: { type: String },
  hasITunesExtras: { type: Boolean },
  isFavorite :{ type: Boolean, default: true }
}, { timestamps: true });



const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;