const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
    character: {
        type: String,
        required : true,
        unique: true,
    },
    power: {
        type: String,
        default: "Not Specified",
    },
    description: {
        type: String,
    }
});

const Anime = mongoose.model("Anime", animeSchema);

module.exports = Anime;