import { fontSplit } from "@konghayao/cn-font-split";

fontSplit({
  FontPath: "./OPPOSans-B.ttf", // 部分 otf 文件会报错，最好使用 ttf 版本的字体
  destFold: "./dist",
  targetType: "ttf", // ttf woff2；注意 eot 文件在浏览器中的支持度非常低，所以不进行支持
  chunkSize: 70 * 1024, // 如果需要的话，自己定制吧
  testHTML: false, // 输出一份 html 报告文件
  reporter: false, // 输出 json 格式报告
  // previewImage: {}, // 只要填入 这个参数，就会进行图片预览文件生成，文件为 SVG 格式
  threads: {}, // 建议开启多线程
  css: {
    // 覆盖默认的 css 设置，一般不需要进行更改
    // fontFamily: "站酷庆科黄油体",
    // fontWeight: 400,
  },
});
