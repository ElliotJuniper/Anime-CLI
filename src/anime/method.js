const Anime = require("./model");

exports.addAnime = async (animeObj) => {
    try {
        await Anime.create(animeObj);
    } catch (error) {
        console.log(error)
    }
}

exports.listAnime = async () => {
    try {
        return await Anime.find({})
    } catch (error) {
        console.log(error)
    }
}

exports.deleteAnime = async (animeObj) => {
    try {
        await Anime.deleteOne(animeObj);
    } catch (error) {
        console.log(error)
    }
}

// exports.updateAnime = async (yargsObj) => {
//     try {
//         await Anime.updateOne({character: yargsObj.character}, {$set: {character: yargsObj.character, power: yargsObj.power, description: yargsObj.description}});
//     } catch (error) {
//         console.log(error)
//     }
// }

exports.updateAnime = async (yargsObj) => {
    try {
        await Anime.updateOne(
            {character: yargsObj.character},
            {power: yargsObj.power, description: yargsObj.description} 
        )
    } catch (error) {
        
    }
}

exports.findCharacter = async (movieObj) => {
        try {
            return await Anime.find({character: movieObj.character})
        } catch (error) {
            console.log(error)
        }
    }

exports.findPower = async (movieObj) => {
        try {
            return await Anime.find({power: movieObj.power})
        } catch (error) {
            console.log(error)
        }
    }

exports.findDescription = async (movieObj) => {
        try {
            return await Anime.find({description: movieObj.description})
        } catch (error) {
            console.log(error)
        }
    }