const { protect } = require("../middlewares/authMiddleware");
const {getFavorite,addFavoriteMovies} = require("../controllers/favorite")

const routes = require("express").Router();

routes.get("/favorite-movies",protect,getFavorite);
routes.post("/add-to-favorite",protect,addFavoriteMovies)

module.exports  = routes


