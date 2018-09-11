// pages/destination/destination.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotcity: ["热门", "周边", "香港", "澳门", "海南", "云南"],
    nearbyCity: ["昆明", "红河", "西双版纳", "大理", "文山", "楚雄", "丽江", "香港"],
    active: 5,
    hotView: [{
      title: "大理三塔",
      imgUrl: "/img/images/destination/view1.png",
      sid: "30",
      id: "0"
    }, {
      title: "丽江古城",
      imgUrl: "/img/images/destination/view2.png",
        sid: "33",
        id: "0"
    }, {
      title: "昆明石林",
      imgUrl: "/img/images/destination/view3.png",
        sid: "130",
        id: "0"
    }, {
      title: "丘北普者黑",
      imgUrl: "/img/images/destination/view4.png",
        sid: "101",
        id: "0"
    }]
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
  activeClick(e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      active: index
    })
  },
  // 进入景点详情
  enterDetail(e) {
    console.log(e)
    let sid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../index/view-detail/view-detail?sid=' + sid + ''
    })
  },
  enterCity(e) {
    let cityname = e.currentTarget.dataset.cityname;
    wx.navigateTo({
      url: 'cityView/cityView?cityname=' + cityname + ''
    })
  },
  // 跳转地图
  toNearby(e) {
    wx.navigateTo({
      url: '../nearby/nearby'
    })
  }
})