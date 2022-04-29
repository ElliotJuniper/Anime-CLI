require("./db/connection");
const yargs = require("yargs");
const { findDescription } = require("./anime/method");
const { findPower } = require("./anime/method");
const { findCharacter } = require("./anime/method");
const { findAnime } = require("./anime/method");
const { addAnime, listAnime, deleteAnime, updateAnime } = require("./anime/method");

const app =  async (yargsObj) => {
    try {
        if (yargsObj.add) {
            await addAnime({
                character: yargsObj.character, 
                power: yargsObj.power, 
                description: yargsObj.description
            })
            console.log(`Successfully added ${yargsObj.character}`)

        } else if (yargsObj.list) {
            console.log(await listAnime())

        } else if (yargsObj.update) {
            await updateAnime({
                character: yargsObj.character, 
                power: yargsObj.power, 
                description: yargsObj.description
            })
            console.log(`Successfully updated ${yargsObj.character}`)

        } else if (yargsObj.delete) {
            await deleteAnime({
                character: yargsObj.character, 
                power: yargsObj.power, 
                description: yargsObj.description
            })
            console.log(`Successfully deleted ${yargsObj.character}`)
            
        } else if (yargsObj.find) {
            console.log(await findCharacter({character: yargsObj.character}))
            console.log(await findPower({power: yargsObj.power}))
            console.log(await findDescription({description: yargsObj.description}))
        
        } else {
            console.log("Incorrect Command")
        }
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);