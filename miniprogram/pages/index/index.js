const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navH: 0,
    show: true,
    city: '城市',
    contShow: false,
    loadShow: true
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
    this.getLocationInfo()
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
    setTimeout(()=>{
      this.setData({
        contShow: true,
        loadShow: false
      })
    }, 800)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      contShow: false,
      loadShow: true
    })    
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
  toSearch: function (event) {
    wx.redirectTo({
      url:'../search/search'
    })
  },
  navToCity: function (e) {
    if (app.globalData.city) {
      wx.navigateTo({
        url: '../citycont/citycont',
      })
    } else {
      this.toOpenSetting()
    }
  },
  toOpenSetting () {
    let _this = this
    wx.openSetting({
      success(res) {
        if (res.authSetting["scope.userLocation"]) {
          _this.getLocationInfo()
        } else {
          _this.toOpenSetting()
        }
      }
    })
  },
  //获取位置信息
  getLocationInfo () {
    let _this = this
    //获取定位信息
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        let locationString = res.latitude + ',' + res.longitude
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/',
          data: {
            "key": "KOUBZ-KQW6U-ALSVE-46GLB-GDBZ2-UKFWB",
            "location": locationString
          },
          method: 'GET',
          success: function (r) {
            app.globalData.city = r.data.result.address_component.city
            _this.setData({
              city: app.globalData.city
            })
          }
        })
      }
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
  },
  toNavDetails() {
    wx.navigateTo({
      url: '../details/details',
    })
  }
})