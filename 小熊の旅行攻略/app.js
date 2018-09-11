//app.js
App({
  globalData: {
    userInfo: null,
    windowWidth: "",
    windowHeight: ""
  },
  onLaunch: function () {
    try {
      var res = wx.getSystemInfoSync()
      console.log(res)
      this.globalData.windowWidth = res.windowWidth
      this.globalData.windowHeight = res.windowHeight
    } catch (e) {
      // Do something when catch error
    }
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  }
  
})