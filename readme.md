# FontMetaDB - Gotta Catch Font All！

Collects metadata about fonts and is used to find detailed information about fonts when only the font name is known, such as in plug-in systems like Figma, Sketch, Photoshop, etc. to create font-related applications.

收集字体的元数据，用来在只知道字体名字的时候，查找字体的详细信息，比如在 Figma、Sketch、Photoshop 等插件系统中制作字体相关应用程序。

## `FontMetaDB.json` Sample

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

## `fontFamilyNameMap.zh.json` Sample

```json
{
    "undefined": "未来荧黑",
    "Yuanti SC": "圆体-简",
    "Yuanti TC": "圆体-繁",
    "Baoli SC": "报隶-简",
    "Baoli TC": "报隶-繁",
    "Source Han Sans SC VF": "思源黑体 VF",
    "Source Han Sans TC VF": "思源黑體 VF",
    "Source Han Sans HC VF": "思源黑體 香港 VF",
    "Glow Sans SC": "未来荧黑",
    "Songti SC": "宋体-简",
    "Songti TC": "宋体-繁",
    "STSong": "华文宋体",
    "Source Han Serif SC": "思源宋体",
    "Source Han Serif TC": "思源宋體",
    "Source Han Sans SC": "思源黑体",
    "Source Han Sans TC": "思源黑體",
    "Source Han Sans HC": "思源黑體 香港",
    "Source Han Sans HW SC": "思源黑体 HW",
    "Source Han Sans HW TC": "思源黑體 HW",
    "Source Han Sans HW HC": "思源黑體 香港 HW",
    "STHeiti": "华文黑体",
    "Lantinghei SC": "兰亭黑-简",
    "Lantinghei TC": "兰亭黑-繁",
    "Heiti TC": "黑体-繁",
    "Heiti SC": "黑体-简",
    "HanziPen SC": "翩翩体-简",
    "HanziPen TC": "翩翩体-繁",
    "LiSong Pro": "儷宋 Pro",
    "PingFang HK": "苹方-港",
    "PingFang TC": "苹方-繁",
    "PingFang SC": "苹方-简",
    ".PingFang HK": ".苹方-港",
    ".PingFang TC": ".苹方-繁",
    ".PingFang SC": ".苹方-简",
    "SimSong": "简宋",
    "Kaiti SC": "楷体-简",
    "STKaiti": "华文楷体",
    "Kaiti TC": "楷体-繁",
    "ziticqnananti": "字体传奇南安体-免费商用",
    "Weibei SC": "魏碑-简",
    "Hiragino Sans GB": "冬青黑体简体中文",
    "Xingkai SC": "行楷-简",
    "Xingkai TC": "行楷-繁",
    "Wawati TC": "娃娃体-繁",
    "Libian SC": "隶变-简",
    "Libian TC": "隶变-繁",
    "Hiragino Sans CNS": "Hiragino Sans CNS",
    "WenYue XinQingNianTi (Non-Commercial Use)": "文悦新青年体 (非商业使用)",
    "Hannotate SC": "手札体-简",
    "Hannotate TC": "手札体-繁",
    "Apple LiSung": "蘋果儷細宋",
    "LingWai TC": "凌慧体-繁",
    "LingWai SC": "凌慧体-简",
    "Apple LiGothic": "蘋果儷中黑",
    "STFangsong": "华文仿宋",
    "VonwaonBitmap 12px Lite": "凤凰点阵体 12px Lite",
    "Weibei TC": "魏碑-繁",
    "Yuppy TC": "雅痞-繁",
    "LiHei Pro": "儷黑 Pro",
    "Yuppy SC": "雅痞-简",
    "Wawati SC": "娃娃体-简",
    "BiauKai": "標楷體"
}
```
