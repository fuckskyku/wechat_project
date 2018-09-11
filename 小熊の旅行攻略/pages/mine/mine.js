// pages/mine/mine.js
let app = getApp()
Page({
  data: {
    userInfo: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    app.getUserInfo((res) => {
      let info = {
        avatarUrl: res.avatarUrl,
        nickName: res.nickName,
        tel: 18883373625,
        grade: 2,
        vip: true,
        integrate: 100,
        Cash: 20
      }
      this.setData({
        userInfo: info
      })
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
  // 跳转修改个人信息
  edit() {
    console.log(1)
    let userInfo = JSON.stringify(this.data.userInfo);
    wx.navigateTo({
      url: '/pages/mine/modify-info/modify-info?userInfo=' + userInfo + ''
    })
  }

})