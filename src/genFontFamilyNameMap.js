const fs = require("fs")
const path = require("path")

const FontMetaDB = require(__dirname + "/../data/FontMetaDB.json")
// const MapZh = require(__dirname + "/../data/fontFamilyNameMap.zh.json")
// const MapJa = require(__dirname + "/../data/fontFamilyNameMap.ja.json")
const MapZh = {}
const MapJa = {}
const MapSZh = {}
const MapSJa = {}

for (let postscriptName in FontMetaDB) {
    let font = FontMetaDB[postscriptName]

    if (font.ZH_fontFamily) {
        if (font.preferredFamily) {
            MapZh[font.preferredFamily] = font.ZH_fontFamily
            MapSZh[font.postscriptName] = [font.ZH_fontFamily, font.preferredSubfamily ?? font.subfamilyName]
        } else {
            MapZh[font.familyName] = font.ZH_fontFamily
            MapSZh[font.postscriptName] = [font.ZH_fontFamily, font.preferredSubfamily ?? font.subfamilyName]
        }
    }

    if (font.JP_fontFamily) {
        if (font.preferredFamily) {
            MapJa[font.preferredFamily] = font.JP_fontFamily
            MapSJa[font.postscriptName] = [font.JP_fontFamily, font.preferredSubfamily ?? font.subfamilyName]
        } else {
            MapJa[font.familyName] = font.JP_fontFamily
            MapSJa[font.postscriptName] = [font.JP_fontFamily, font.preferredSubfamily ?? font.subfamilyName]
        }
    }
}

fs.writeFileSync(__dirname + "/../data/fontFamilyNameMap.zh.json", JSON.stringify(sortOb(MapZh), null, 2))
fs.writeFileSync(__dirname + "/../data/fontFamilyNameMap.ja.json", JSON.stringify(sortOb(MapJa), null, 2))
fs.writeFileSync(__dirname + "/../data/fontPostscriptName2FamilyMap.zh.json", JSON.stringify(sortOb(MapSZh), null, 2))
fs.writeFileSync(__dirname + "/../data/fontPostscriptName2FamilyMap.ja.json", JSON.stringify(sortOb(MapSJa), null, 2))

console.log("genFontFamilyNameMap done.")

function sortOb(ob) {
    let arr = Object.entries(ob)
    const collator = new Intl.Collator("zh", { numeric: true, sensitivity: "base" })
    arr = arr.sort((a, b) => collator.compare(a[1], b[1]))

    return Object.fromEntries(arr)
}
