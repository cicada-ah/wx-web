// miniprogram/pages/submit/submit.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: 0,
    textCount: 0,
    imageItems: [],
    address: '添加主题位置',
    show: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    let _this = this
    wx.getStorage({
      key: 'userInfo',
      success(res) {
        if (res != null) {
          _this.setData({
            show: false
          })
        }
      }
    })       
    this.setData({
      navH: app.globalData.navH
    })
  },
  bindTextinput (e) {
    let textVal = e.detail.value
    this.setData({
      textCount : textVal.length
    })
  },
  openCamera () {
    let _this = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      success: function (res) {
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (resf) {
            let imageList = _this.data.imageItems
            imageList.push(resf)
            _this.setData({
              imageItems: imageList
            })
          }
        })
      }
    })
  },
  getLocation () {
    let _this=this
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
        _this.setData({
          address: res.address
        })
      },
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
  onChange () {

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