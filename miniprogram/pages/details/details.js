// miniprogram/pages/details/details.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    guanzhu: '关注',
    bdColor: 'red',
    navH: 0,
    source: [
      { img: "http://www.tangparadise.cn/themes/default/images/focuspic/banner1.jpg", key1: "自定义参数1", key2: "自定义参数2", key_more: "自定义参数X" },
      { img: "http://www.tangparadise.cn/themes/default/images/focuspic/banner2.jpg" },
      { img: "http://www.tangparadise.cn/themes/default/images/focuspic/banner3.jpg" },
      { img: "http://www.tangparadise.cn/themes/default/images/focuspic/banner4.jpg" },
      { img: "http://qcloud.dpfile.com/pc/uqdizIjZocQ3GFkZoJvX0MURGZr89LXD2z6cGS21TFPu77miMw3hrWJKV5GKx2IFl0cm-Lf9tDMlLZpO7rb3bg.jpg" }
    ]    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: app.globalData.navH
    })
  },
  switchGz () {
    if (this.data.bdColor === 'red') {
      this.setData({
        bdColor: 'gainsboro',
        guanzhu: '已关注'
      })
    } else {
      this.setData({
        bdColor: 'orange',
        guanzhu: '关注'
      })      
    }
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
  handleReturn() {
    wx.switchTab({
      url: '../index/index',
    })
  },
  ongetLocation () {
    wx.openLocation({
      latitude: 34.21252,
      longitude: 108.97386,
    })
  },
  touch () {
    
  }
})