// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  hotClick() {
    console.log(1)
    this.setData({
      active: 0
    })
  },
  aroundClick() {
    this.setData({
      active: 1
    })
  },
  hongkongClick() {
    this.setData({
      active: 2
    })
  },
  aomenClick() {
    this.setData({
      active: 3
    })
  }
})