// pages/index/view-detail/view-detail.js
import { View, star, getViewData, dateNow } from "../../../utils/util.js"
var detailList = require('../../../data/view-detail.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    details: [],
    detailView: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    active: 0,
    date: [],
    ratings: {},
    viewDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    
    // 页面初始化 options为页面跳转所带来的参数
    let sid = options.sid;
    let obj = {};
    let _this = this;
    // 设置日期
    let date = dateNow();
    date[0].today = "今天";
    date[1].tomorrow = "明天";

    console.log(detailList.detailList.result)

    this.setData({
      date: date,
      
      detailView: detailList.detailList.result.find(item => (
        item.sid == sid
      ))
    })
    console.log(this.data.detailView)
    this.getRatings();
    this.getBanner();
    console.log(this.data.ratings)
    console.log(this.data.ratings[0])
    
    // 接口为根据sid查寻景点详情 
    // let url = "http://70989421.appservice.open.weixin.qq.com/data/view-detail.json"
    // new View(url, "get").send((res) => {
    //   if (res.data.error_code == 0) {
    //     let result = res.data.result;
    //     for (let i = 0, len = result.length; i < len; i++) {
    //       if (result[i].sid == sid) {
    //         obj = result[i];
    //       }
    //     }

    //   }
    //   for (let i = 0, len = obj.ratings.length; i < len; i++) {
    //     let item = obj.ratings[i];
    //     item.stars = star(item.score);
    //   }

    //   _this.setData({
    //     viewDetail: obj,
    //     ratings: obj.ratings[0]
    //   })
    // })
  },
  getRatings() {
    let arr = this.data.detailView.ratings
    this.setData({
      ratings: arr
    })
  },
  getBanner() {
    let arr = this.data.detailView.banner
    this.setData({
      details: arr
    })
  },
  // tab切换
  productClick() {
    this.setData({
      active: 0
    })
  },
  detailClick() {
    this.setData({
      active: 1
    })
  },
  ratingClick() {
    this.setData({
      active: 2
    })
  },
  
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})