const detectCharacterEncoding = require("detect-character-encoding")
const iconv = require("iconv-lite")

module.exports = function fix(font) {
    // Buffer
    for (let key in font) {
        if (font[key]?.type == "Buffer") {
            font[key] = textDecode(font[key].data, key, font)
        }
    }
    // Buffer
    for (let key in font.records) {
        let reOb = font.records[key]

        for (let langKey in reOb) {
            let ob = reOb[langKey]
            if (ob?.type == "Buffer") {
                reOb[langKey] = textDecode(ob.data, langKey, font)
            }
        }
    }
}

function textDecode(data, key, font) {
    let buffer = Buffer.from(data)
    let encoding = detectCharacterEncoding(buffer).encoding

    let text

    if (big5_list.some((reg) => reg.test(font.postscriptName))) {
        text = iconv.decode(buffer, "big5")
    } else if (gbk_list.some((reg) => reg.test(font.postscriptName))) {
        text = iconv.decode(buffer, "gbk")
        // text = iconv.decode(buffer, "utf-8")
        // text = buffer.toString()
    } else if (key == "zh-Hant") {
        text = iconv.decode(buffer, "big5")
    } else {
        try {
            text = iconv.decode(buffer, encoding)
        } catch (e) {
            text = buffer.toString()
            // console.warn("[textDecode] warn:", encoding, text, data, `:${font.postscriptName}`)
            // console.warn("[textDecode] warn:", encoding, text, data,font,e)
        }
    }

    if (/(Biau)/.test(font.postscriptName)) {
        console.log("[TX]", `[${font.postscriptName}]`, key, encoding, `>>`, text)
    }
    // console.log(encoding, text)
    text = text.replace(/\u0000/g, "")
    return text
}

var gbk_list = [/^STFangsong/, /^STHeiti/, /Heiti/, /^STKaiti/, /^STSong/, /^STXihei/, /^DFKaiShu/]
var big5_list = [
    /^LiSong/,
    /^LiGothic/,
    /^LiHei/,
    /^LiSung/,
    /^AdobeMingStd/,
    /^TW-Sung/,
    /^RS_CuBiao/,
    /^DFTan/,
    /^AdobeFanHeiti/,
]
