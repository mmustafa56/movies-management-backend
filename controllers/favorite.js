const Movie = require("../models/Favorite");


const getFavorite = async (req, res) => {
    const userId = req.payload._id;
    try {
        const favorite = await Movie.find({ userId: userId });
        // console.log(favorite)
        return res.status(200).json({ success: true, data: favorite })
    } catch (error) {
        return res.status(500).json({ success: false, message: `Error : ${error}` })
    }

}


const addFavoriteMovies = async (req, res) => {
    let { 
        wrapperType, kind, collectionId, trackId, artistName, collectionName, trackName,
        collectionCensoredName, trackCensoredName, collectionArtistId, collectionArtistViewUrl, 
        collectionViewUrl, trackViewUrl, previewUrl, artworkUrl30, artworkUrl60, artworkUrl100, 
        collectionPrice, trackPrice, trackRentalPrice, collectionHdPrice, trackHdPrice, trackHdRentalPrice, 
        releaseDate, collectionExplicitness, trackExplicitness, trackCount, trackNumber, trackTimeMillis, 
        country, currency, primaryGenreName, contentAdvisoryRating, shortDescription, longDescription, 
        hasITunesExtras 
    } = req.body;
    
    const userId = req.payload._id;
    if (!trackId) {
        trackId = Math.floor(Math.random() * 1000000000); 
    }

    try {
        const newFavorite = new Movie({
            userId,
            wrapperType,
            kind,
            collectionId,
            trackId,  
            artistName,
            collectionName,
            trackName,
            collectionCensoredName,
            trackCensoredName,
            collectionArtistId,
            collectionArtistViewUrl,
            collectionViewUrl,
            trackViewUrl,
            previewUrl,
            artworkUrl30,
            artworkUrl60,
            artworkUrl100,
            collectionPrice,
            trackPrice,
            trackRentalPrice,
            collectionHdPrice,
            trackHdPrice,
            trackHdRentalPrice,
            releaseDate,
            collectionExplicitness,
            trackExplicitness,
            trackCount,
            trackNumber,
            trackTimeMillis,
            country,
            currency,
            primaryGenreName,
            contentAdvisoryRating,
            shortDescription,
            longDescription,
            hasITunesExtras,
            isFavorite: true,
        });

        await newFavorite.save();

        res.status(201).json({ message: 'Movie added to favorites successfully.', movie: newFavorite });
    } catch (error) {
        console.error('Error adding movie to favorites:', error);
        res.status(500).json({ message: 'Server error. Could not save movie to favorites.' });
    }
};




module.exports = {
    getFavorite,
    addFavoriteMovies
}