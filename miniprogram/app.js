//app.js
App({
  onLaunch: function () {
    //获取手机系统信息
    let _this = this
    wx.getSystemInfo({
      success: res => {
        // 导航高度
        this.globalData.navH = res.statusBarHeight + 46
      }, fail(err) {
        console.log(err)
      }
    })

  },
  globalData: {
    userInfo: null,
    navH: 0,
    city: ''
  }
})