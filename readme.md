# FontMetaDB - Gotta Catch Font All！

Collects metadata about fonts and is used to find detailed information about fonts when only the font name is known, such as in plug-in systems like Figma, Sketch, Photoshop, etc. to create font-related applications.

收集字体的元数据，用来在只知道字体名字的时候，查找字体的详细信息，比如在 Figma、Sketch、Photoshop 等插件系统中制作字体相关应用程序。

## [`FontMetaDB.json`](https://github.com/yArna/FontMetaDB/raw/master/data/FontMetaDB.json) Sample

-   [https://github.com/Moonvy/FontMetaDB/raw/master/data/FontMetaDB.json](https://github.com/yArna/FontMetaDB/raw/master/data/FontMetaDB.json)

```json
{
    "PingFangSC-Regular": {
        "postscriptName": "PingFangSC-Regular",
        "fullName": "PingFang SC Regular",
        "familyName": "PingFang SC",
        "subfamilyName": "Regular",
        "preferredFamily": "PingFang SC",
        "ZH_fontFamily": "苹方-简",
        "ZH_subfamilyName": "常规体",
        "records": {
            "postscriptName": {
                "0-0": "PingFangSC-Regular",
                "en": "PingFangSC-Regular"
            },
            "preferredFamily": {
                "zh-TW": "蘋方-簡",
                "en": "PingFang SC",
                "zh": "苹方-简"
            },
            "preferredSubfamily": {
                "zh-TW": "標準體",
                "en": "Regular",
                "zh": "常规体"
            },
            "fontFamily": {
                "0-0": "PingFang SC",
                "en": "PingFang SC",
                "zh-TW": "蘋方-簡",
                "zh": "苹方-简"
            }
        }
    }
}
```

## [`fontFamilyNameMap.zh.json`](https://github.com/Moonvy/FontMetaDB/raw/master/data/fontFamilyNameMap.zh.json) Sample

[https://github.com/Moonvy/FontMetaDB/raw/master/data/fontFamilyNameMap.zh.json](https://github.com/Moonvy/FontMetaDB/raw/master/data/fontFamilyNameMap.zh.json)

```json
{
    "Alibaba PuHuiTi": "阿里巴巴普惠体",
    "Alibaba PuHuiTi 2.0": "阿里巴巴普惠体 2.0",
    "FZBangShuXingS-R-GB": "榜书字体",
    "baotuxiaobaiti": "包图小白体",
    "Baoli TC": "报隶-繁",
    "Baoli SC": "报隶-简",
    "Benmo Chenhei": "本墨陈黑",
    "DengXian": "等线",
    "Hiragino Sans GB": "冬青黑体简体中文",
    "FOTILE1": "方太梦想宋细",
    "FOTILE2": "方太梦想宋中",
    "FZBaoSong-Z04S": "方正报宋简体",
    "FZBeiWeiKaiShu-S19S": "方正北魏楷书简体",
    "FZBoYaSong": "方正博雅宋_GBK",
    "FZChaoCuHei-M10S": "方正超粗黑简体",
    "FZCuKai-GBK": "方正粗楷_GBK",
    "FZCuQian-M17S": "方正粗倩简体",
    "FZCuSong-B09S": "方正粗宋简体",
    "FZTanHeiS-B-GB": "方正粗谭黑简体",
    "FZCuYuan-M03S": "方正粗圆简体",
    "FZDaBiaoSong-B06S": "方正大标宋简体",
    "FZDaHei-B02S": "方正大黑简体",
    "FZFangMeiS-R-GB": "方正方魅简体",
    "FZFangGuo-R-GB": "方正仿郭简体",
    "FZFengYaSongS-GB": "方正风雅宋简体",
    "FZGuLi-S12T": "方正古隶繁体",
    "FZGuLi-S12S": "方正古隶简体",
    "FZHanJian-R-GB": "方正汉简简体",
    "FZHanZhenGuangBiaoS-GB": "方正汉真广标简体",
    "FZHaoTi-R-GB": "方正豪体简体",
    "FZHei-B01S": "方正黑体简体",
    "FZHuangCao-S09S": "方正黄草简体",
    "FZKai-Z03S": "方正楷体简体",
    "FZKTPY01": "方正楷体拼音字库01",
    "FZKTPY02": "方正楷体拼音字库02"
}
```

## [`fontFamilyNameMap.jp.json`](https://github.com/Moonvy/FontMetaDB/raw/master/data/fontFamilyNameMap.ja.json) Sample

[https://github.com/Moonvy/FontMetaDB/raw/master/data/fontFamilyNameMap.ja.json](https://github.com/Moonvy/FontMetaDB/raw/master/data/fontFamilyNameMap.ja.json)

```json
{
    "Source Han Sans VF": "源ノ角ゴシック VF",
    "Osaka": "Osaka",
    "YuMincho": "游明朝体",
    "YuMincho +36p Kana": "游明朝体+36ポかな",
    "Source Han Serif": "源ノ明朝",
    "Source Han Sans": "源ノ角ゴシック",
    "Source Han Sans HW": "源ノ角ゴシック HW",
    "GenYoMin JP": "源様明朝",
    "Hiragino Sans": "ヒラギノ角ゴシック",
    "GenWanMin JP": "源雲明朝",
    "Heiti TC": "黒体-繁",
    "Heiti SC": "黒体-簡",
    "SoukouMincho": "装甲明朝",
    "Genkaimincho": "源界明朝",
    "YuKyokasho Yoko": "游教科書体 横用",
    "YuKyokasho": "游教科書体",
    "GenRyuMin JP": "源流明朝",
    "YuGothic": "游ゴシック体",
    "Gen Jyuu Gothic P": "源柔ゴシックP",
    "Hiragino Kaku Gothic Std": "ヒラギノ角ゴ Std",
    "Hiragino Kaku Gothic StdN": "ヒラギノ角ゴ StdN",
    "Gen Jyuu Gothic Monospace": "源柔ゴシック等幅",
    "Gen Jyuu Gothic": "源柔ゴシック",
    "Toppan Bunkyu Midashi Gothic": "凸版文久見出しゴシック",
    "Toppan Bunkyu Gothic": "凸版文久ゴシック",
    "Klee": "クレー",
    "SetoFont": "瀬戸フォント",
    "Hiragino Mincho ProN": "ヒラギノ明朝 ProN",
    "Hiragino Mincho Pro": "ヒラギノ明朝 Pro",
    "Tsukushi B Round Gothic": "筑紫B丸ゴシック",
    "Hiragino Kaku Gothic ProN": "ヒラギノ角ゴ ProN",
    "Hiragino Kaku Gothic Pro": "ヒラギノ角ゴ Pro",
    "Chogokuboso Gothic": "超極細ゴシック",
    "Hiragino Maru Gothic Pro": "ヒラギノ丸ゴ Pro",
    "Hiragino Maru Gothic ProN": "ヒラギノ丸ゴ ProN",
    "Tsukushi A Round Gothic": "筑紫A丸ゴシック",
    "Toppan Bunkyu Mincho": "凸版文久明朝",
    "Toppan Bunkyu Midashi Mincho": "凸版文久見出し明朝",
    "MS Gothic": "ＭＳ ゴシック",
    "MS UI Gothic": "MS UI Gothic",
    "MS PGothic": "ＭＳ Ｐゴシック",
    "Yu Gothic": "游ゴシック"
}
```


## [`fontPostscriptName2FamilyMap.zh.json`](https://github.com/Moonvy/FontMetaDB/raw/master/data/fontPostscriptName2FamilyMap.zh.json) Sample

[https://github.com/Moonvy/FontMetaDB/raw/master/data/fontPostscriptName2FamilyMap.zh.json](https://github.com/Moonvy/FontMetaDB/raw/master/data/fontPostscriptName2FamilyMap.zh.json)

```json
{
  "MLingWaiMedium-TC": ["凌慧体-繁", "Medium"],
  "MLingWaiMedium-SC": ["凌慧体-简", "Medium"],
  "FZuanSu": ["迷你繁篆书", "regular"],
  "Jcusong": ["迷你简粗宋", "Regular"],
  "JHeiMi": ["迷你简黑咪", "regular"],
  "JSaoEr": ["迷你简少儿", "Regular"],
  "Jxiangli": ["迷你简祥隶", "Regular"],
  "RS_CuBiao": ["棉梓冼极", "Regular"],
  "laowu-Regular": ["默陌老屋手迹", "Regular"],
  "未定义": ["默陌山魂手迹", "Regular"],
  "suibixi-Regular": ["默陌随想体细", "Regular"],
  "yashi-Regular": ["默陌雅诗手迹", "Regular"],
  "MuyaoPleased": ["沐瑶随心手写体", "Regular"],
  "NaikaiFont-Bold": ["内海フォント-Bold", "Bold"],
  "NaikaiFont-ExtraLight": ["内海フォント-ExtraLight", "ExtraLight"],
  "NaikaiFont-Light": ["内海フォント-Light", "Light"]
}
```



## [`fontPostscriptName2FamilyMap.ja.json`](https://github.com/Moonvy/FontMetaDB/raw/master/data/fontPostscriptName2FamilyMap.ja.json) Sample

[https://github.com/Moonvy/FontMetaDB/raw/master/data/fontPostscriptName2FamilyMap.ja.json](https://github.com/Moonvy/FontMetaDB/raw/master/data/fontPostscriptName2FamilyMap.ja.json)

```json
{
  "NaikaiFont-ExtraLight": ["内海フォント-ExtraLight", "ExtraLight"],
  "NaikaiFont-Light": ["内海フォント-Light", "Light"],
  "NaikaiFont-Regular": ["内海フォント-Regular", "Regular"],
  "NaikaiFont-SemiBold": ["内海フォント-SemiBold", "SemiBold"],
  "aoyagireisyosimo2": ["青柳隷書SIMO2_T", "Regular"],
  "ToppanBunkyuMidashiMinchoStdN-ExtraBold": ["凸版文久見出し明朝", "Regular"],
  "ToppanBunkyuMidashiGothicStdN-ExtraBold": ["凸版文久見出しゴシック", "Regular"],
  "ToppanBunkyuMinchoPr6N-Regular": ["凸版文久明朝", "Regular"],
  "ToppanBunkyuGothicPr6N-DB": ["凸版文久ゴシック", "Regular"],
  "ToppanBunkyuGothicPr6N-Regular": ["凸版文久ゴシック", "Regular"],
  "AjiwaiPro": ["味わい毛筆Pro", "Regular"],
  "KozMinPr6N-Heavy": ["小塚明朝 Pr6N", "Bold"],
  "KozMinPr6N-Bold": ["小塚明朝 Pr6N", "Bold"],
  "KozMinPr6N-ExtraLight": ["小塚明朝 Pr6N", "Regular"],
  "KozMinPr6N-Regular": ["小塚明朝 Pr6N", "Regular"]
}
```



## Contribute the metadata of the fonts installed in your system

Download font export tool [Windows system](https://github.com/Moonvy/FontMetaDB/releases/download/ExportMyFontList/ExportMyFontList-Windows.zip) | [MacOS system ](https://github.com/Moonvy/FontMetaDB/releases/download/ExportMyFontList/ExportMyFontList-MacOS.zip)
Unzip it and run it directly, it will generate a font list file in the current folder, like this: `fontlist.08a46dd7955f94.json`, create an [Issues](https://github.com/Moonvy/FontMetaDB/issues/new/choose) that uploads the file as an attachment.

## 没有你用的字体？贡献你系统安装里的字体的信息

下载字体导出工具 [Windows 系统](https://github.com/Moonvy/FontMetaDB/releases/download/ExportMyFontList/ExportMyFontList-Windows.zip) | [MacOS 系统](https://github.com/Moonvy/FontMetaDB/releases/download/ExportMyFontList/ExportMyFontList-MacOS.zip)

解压后直接运行，它会在当前文件夹生成一个字体列表文件，像这样：`fontlist.08a46dd7955f94.json`，创建一个 [Issues](https://github.com/Moonvy/FontMetaDB/issues/new/choose) ，把文件作为附件上传给我们。
)

### Develop

-   fontlist json files into `fontlist/`
-   `npm run gen` output to `data/`
-   if you encounter text encoding problems, review `src/fix.js`
