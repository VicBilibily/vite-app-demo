function hello() {
  return "world";
}
Page({
  data: {
    mode: "light"
  },
  switchMode() {
    if (this.data.mode === "light") {
      this.setData({
        mode: "dark"
      });
    } else {
      this.setData({
        mode: "light"
      });
    }
  },
  async copy(e) {
    var _a;
    if ((_a = e.mark) == null ? void 0 : _a.url) {
      await wx.setClipboardData({
        data: e.mark.url
      });
      console.log(`复制成功: ${e.mark.url}`);
    }
  },
  onLoad() {
    console.log(hello());
  }
});
