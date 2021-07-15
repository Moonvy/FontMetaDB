const fs = require("fs")
const path = require("path")
const fix = require("./fix.js")

// const FontMetaDB = require(__dirname + "/../data/FontMetaDB.json")
const FontMetaDB = {}

console.log("FontMetaDB:", Object.keys(FontMetaDB).length)

for (let filename of fs.readdirSync(__dirname + "/../fontlist")) {
    let filepath = __dirname + "/../fontlist/" + filename
    console.log("load:", filepath)
    let json = fs.readFileSync(filepath).toString()
    let fontlist = JSON.parse(json)
    console.log("fontlist:", fontlist.length)

    for (let font of fontlist) {
            fix(font)

        if (!FontMetaDB[font.postscriptName]) {
            FontMetaDB[font.postscriptName] = font
        }
    }
}

fs.writeFileSync(__dirname + "/../data/FontMetaDB.json", JSON.stringify(FontMetaDB, null, 2))
console.log("FontMetaDB write.", Object.keys(FontMetaDB).length)

require("./genFontFamilyNameMap.js")
