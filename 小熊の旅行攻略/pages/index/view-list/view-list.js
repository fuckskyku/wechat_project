// pages/index/view-list/view-list.js
var cityList = require('../../../data/city.js');
var detailList = require('../../../data/view-detail.js');
var viewList = require('../../../data/view.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    citys: [],
    details: [],
    detailView: [],
    viewList: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let i = options.id - 1;
    console.log(detailList.detailList.result)
    this.setData({
      citys: cityList.cityList[0].result,
      details: detailList.detailList.result[i].banner,
      detailView: detailList.detailList.result,
      viewList: viewList.viewList.result
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  lower() {
    this.setData({
      showMore: true
    });
    wx.showNavigationBarLoading();
  },
  scroll() {
    if (this.data.showMore) {
      this.setData({
        showMore: false
      })
      wx.hideNavigationBarLoading();
    }
  },
  // 进入景点详情
  enterDetail(e) {
    let sid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../view-detail/view-detail?sid=' + sid + ''
    })
  }
})