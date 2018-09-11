// pages/nearby/nearby.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: '',
    longitude: '',
    controls: [
      {
        id: 1,
        iconPath: '/img/location.png',
        position: {
          left: app.globalData.windowWidth / 2 - 20,
          top: app.globalData.windowHeight / 2 - 20,
          width: 40,
          height: 40
        },
        clickable: true
      },
      {
        id: 2,
        iconPath: '/img/location.png',
        position: {
          left: 20,
          top: app.globalData.windowHeight - 90,
          width: 40,
          height: 40
        },
        clickable: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
    // 使用 wx.createMapContext 获取 map 上下文
    this.mapCtx = wx.createMapContext('map')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getLocation()
  },
  getLocation() {
    var _this = this;
    wx.getLocation({
      type: 'wgs84',
      success: function (res) {
        _this.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
    })
  },
  controltap() {
    this.mapCtx.moveToLocation()
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
  
  }
})