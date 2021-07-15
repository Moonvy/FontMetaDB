var fontkit = require("fontkit")
// loadFontFile("/Users/nullice/Library/Fonts/SourceHanSans.ttc")

function loadFontFile(fontPath) {
    var font = fontkit.openSync(fontPath)

    let dfonts = []
    if (font.fonts) {
        dfonts = font.fonts
    } else {
        dfonts = [font]
    }

    let re = []
    dfonts.forEach((dfont) => {
        let ob = {
            postscriptName: dfont.postscriptName,
            fullName: dfont.fullName,
            familyName: dfont.familyName,
            subfamilyName: dfont.subfamilyName,
            preferredFamily: dfont.preferredFamily,
            preferredSubfamily: dfont.preferredSubfamily,
        }

        if (dfont.name.records?.preferredFamily?.["en"]) {
            ob.preferredFamily = dfont.name.records?.preferredFamily?.["en"]
        } else if (dfont.name.records?.preferredFamily?.["0-0"]) {
            ob.preferredFamily = dfont.name.records?.preferredFamily?.["0-0"]
        }

        if (dfont.name.records.preferredFamily) {
            ob.ZH_fontFamily = getByKey(dfont.name.records.preferredFamily, "zh")
            ob.JP_fontFamily = getByKey(dfont.name.records.preferredFamily, "ja")
        } else if (dfont.name.records.fontFamily) {
            ob.ZH_fontFamily = getByKey(dfont.name.records.fontFamily, "zh")
            ob.JP_fontFamily = getByKey(dfont.name.records.fontFamily, "ja")
        }

        if (dfont.name.records.preferredSubfamily) {
            ob.ZH_subfamilyName = getByKey(dfont.name.records.preferredSubfamily, "zh")
            ob.JP_subfamilyName = getByKey(dfont.name.records.preferredSubfamily, "ja")
        } else if (dfont.name.records.subfamilyName) {
            ob.ZH_subfamilyName = getByKey(dfont.name.records.subfamilyName, "zh")
            ob.JP_subfamilyName = getByKey(dfont.name.records.preferredSubfamily, "ja")
        }

        ob.records = {
            postscriptName: dfont.name.records.postscriptName,
            preferredFamily: dfont.name.records.preferredFamily,
            preferredSubfamily: dfont.name.records.preferredSubfamily,
            fontFamily: dfont.name.records.fontFamily,
            subfamilyName: dfont.name.records.subfamilyName,
        }
        re.push(ob)
    })

    return re
}

function getByKey(ob, key = "zh") {
    let keys = Object.keys(ob)
    let zhKey = keys.find((x) => x.toLowerCase() == key)

    if (!zhKey) zhKey = keys.find((x) => new RegExp(key, "i").test(x))
    if (zhKey) {
        return ob[zhKey]
    }
}

module.exports = loadFontFile
