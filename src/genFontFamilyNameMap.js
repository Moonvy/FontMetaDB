const fs = require("fs")
const path = require("path")

const FontMetaDB = require(__dirname + "/../data/FontMetaDB.json")
const MapZh = require(__dirname + "/../data/fontFamilyNameMap.zh.json")
const MapJa = require(__dirname + "/../data/fontFamilyNameMap.ja.json")

for (let postscriptName in FontMetaDB) {
    let font = FontMetaDB[postscriptName]

    if (font.ZH_fontFamily) {
        if (font.preferredFamily) {
            MapZh[font.preferredFamily] = font.ZH_fontFamily
        } else {
            MapZh[font.familyName] = font.ZH_fontFamily
        }
    }

    if (font.JP_fontFamily) {
        if (font.preferredFamily) {
            MapJa[font.preferredFamily] = font.JP_fontFamily
        } else {
            MapJa[font.familyName] = font.JP_fontFamily
        }
    }
}
fs.writeFileSync(__dirname + "/../data/fontFamilyNameMap.zh.json",JSON.stringify(MapZh,null,2) )
fs.writeFileSync(__dirname + "/../data/fontFamilyNameMap.ja.json",JSON.stringify(MapJa,null,2) )

console.log("genFontFamilyNameMap done.")
