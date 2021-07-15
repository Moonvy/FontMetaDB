const fs = require("fs")
const ora = require("ora")
const path = require("path")
const fontManager = require("node-system-fonts")
const loadFontFile = require("./loadFontFile")
var fonts = fontManager.getAvailableFontsSync()

const spinner = ora("查找系统中的字体...").start()

let fontFiles = new Set()
fonts.filter((font) => fontFiles.add(font.path))

spinner.info(`找到 ${fonts.length} 个字体文件`)

let reList = []
spinner.start("解析字体...")
let i = 0
fontFiles.forEach((fontPath) => {
    spinner.text = `解析 ${fontPath}`
    i++
    console.log(`解析 [${i}/${fontFiles.size}] ${fontPath}`)
    let fontInfoList = loadFontFile(fontPath)
    reList = reList.concat(fontInfoList)
})

let outPath = path.resolve(`./fontlist.${Math.random().toString(16).replace(".", "")}.json`)
fs.writeFileSync(outPath, JSON.stringify(reList, null, 2))
spinner.succeed(`解析完成！结果保存到（${outPath}）`)
