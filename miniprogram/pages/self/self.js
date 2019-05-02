// miniprogram/pages/self/self.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: 0,
    active: 1,
    show: true,
    userInfo: {},
    avatarUrl: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {   
    this.setData({
      navH: app.globalData.navH
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let _this = this
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        console.log(res)
        if (res != null) {
          _this.setData({
            show: false,
            userInfo: JSON.parse(res.data),
            avatarUrl: JSON.parse(res.data).avatarUrl
          })
          console.log(_this.data.avatarUrl)
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  onChange(event) {
    wx.showToast({
      title: `切换到内容 ${event.detail.index + 1}`,
      icon: 'none'
    })
  },
  onGotUserInfo: function (e) {
    if (e.detail.rawData) {
      wx.setStorage({
        key: 'userInfo',
        data: e.detail.rawData
      })
      this.setData({
        show: false
      })
    }
  }  
})