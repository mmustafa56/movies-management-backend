const { protect } = require("../middlewares/authMiddleware");
const allFavorite = require("../controllers/favorite")

const routes = require("express").Router();

routes.get("/allMovies",allFavorite);


module.exports  = routes


