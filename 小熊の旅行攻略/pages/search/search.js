// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: "点击选择定位信息"
  },
  staticData: {
    success: false//默认页面一打开
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  onShareAppMessage: function () {
  
  },
  handleBackTap() {
    console.log("back")
    wx.navigateTo({
      url: '../nearby/nearby',
    })

  },
  handleAddressClick() {
    wx.chooseLocation({
      success: this.handleChooseLocationSucc.bind(this)
    })
  },
  handleChooseLocationSucc(res) {
    console.log(res)
    this.setData({
      address: res.address
    })
    Object.assign(this.staticData, {
      latitude: res.latitude,
      longitude: res.longitude
    })
  },
  handleSubmit(e) {
    var that = this
    if (this.data.address === "点击选择定位信息" || !this.data.address) {
      wx: wx.showToast({
        title: '请选择所在地点',
        icon: 'loading',
        duration: 2000
      })
      return
    }else{
      that.setData({
        success: true,
        address: this.data.address,
        latitude: this.staticData.latitude,
        longitude: this.staticData.longitude
      })
    }
    
  }
})