// miniprogram/pages/citycont/citycont.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city: '',
    navH: 0,
    chooseShow: false,
    contShow: false,
    loadShow: true,
    areaList: {
      province_list: {
        110000: '北京市',
        120000: '天津市'
      },
      city_list: {
        110100: '北京市',
        110200: '县',
        120100: '天津市',
        120200: '县'
      },
      county_list: {
        110101: '东城区',
        110102: '西城区',
        110105: '朝阳区',
        110106: '丰台区',
        120101: '和平区',
        120102: '河东区',
        120103: '河西区',
        120104: '南开区',
        120105: '河北区',
        // ....
      }
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      city: app.globalData.city,
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
    setTimeout(() => {
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
  onChooseCity () {
    this.setData({
      chooseShow: true
    })
  },
  onClose () {
    this.setData({
      chooseShow: false
    })
  },
  handleReturn() {
    wx.switchTab({
      url: '../index/index',
    })
  }, 
  onChange(e) {
    this.setData({
      contShow: false,
      loadShow: true
    })    
    setTimeout(() => {
      this.setData({
        contShow: true,
        loadShow: false
      })
    }, 800)   
    wx.showToast({
      title: `切换到分类${e.detail.title}...`
    })
  } 
})