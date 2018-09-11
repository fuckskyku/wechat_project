//index.js
//获取应用实例
const app = getApp()
var viewList = require('../../data/view.js');
console.log(viewList)
let cityName;
// var APP_URL = require('now-playing.json');
Page({
  data: {  
    imgUrls: [
      'http://pic4.40017.cn/scenery/destination/2016/09/13/15/tcbmBI.jpg.webp',
      '//pic5.40017.cn/02/001/8c/55/rBLkCFtr83mAWiA8AADIbgjQ8o8540_540x304_00.jpg',
      '//pic5.40017.cn/01/000/8c/4e/rBLkBltr83KABTmXAADPzvdi-MM638_540x304_00.jpg',
      '//pic5.40017.cn/02/000/8c/55/rBLkCVtr82uADsP2AAD5g8U73ts972_540x304_00.jpg'
    ],
    active: true,
    viewDetail: [],
    loading: true,
    animationData: {},
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    interval2: 3000, 
    allCity: [],
    cityHot: [
      {
        cityName: "厦门",

      },
      {
        cityName: "黄山",

      },
      {
        cityName: "嵩山",

      },
      {
        cityName: "天山",

      }
    ],
    viewHot: [
      {
        imgs: [
          {
            imgurl: "https://dimg04.c-ctrip.com/images/300e0q000000g5o8b658A_C_500_280.jpg",
            title: "云南昆明+大理+丽江6日5晚跟团游(4钻)",
            sid: '30'
          },
          {
            imgurl: "https://dimg19.c-ctrip.com/images/10040m000000dicv13983_C_500_280.jpg",
            title: "香港4日自由行·机酒随心选【销量明星款 2万人出游】",
            sid: "3640"
          },
          {
            imgurl: "../../img/dis/dis3.jpg",
            title: "上海迪士尼度假区一日游",
            sid: "3019"
          },
          {
            imgurl: "../../img/dis/dis4.jpg",
            title: "青岛+威海+乳山+烟台+蓬莱+大连6日5晚跟团游(3钻)·",
            sid: '3361'
          }
        ]
      },
      {
        imgs: [
          {
            imgurl: "../../img/dis/dis4.jpg",
            title: "青岛+威海+乳山+烟台+蓬莱+大连6日5晚跟团游(3钻)",
            sid: '3361'
          },
          {
            imgurl: "../../img/dis/dis3.jpg",
            title: "上海迪士尼度假区一日游",
            sid: '3019'
          },
          {
            imgurl: "https://dimg19.c-ctrip.com/images/10040m000000dicv13983_C_500_280.jpg",
            title: "香港4日自由行·机酒随心选【销量明星款 2万人出游】",
            sid: '3640'
          },
          {
            imgurl: "https://dimg04.c-ctrip.com/images/300e0q000000g5o8b658A_C_500_280.jpg",
            title: "云南昆明+大理+丽江6日5晚跟团游(4钻)",
            sid: '30'
          }
        ]
      }
    ],
    viewList: [],
    active: true,
    viewDetail: [],
    loading: true,
    animationData: {},
    
    index: "1",
    msg: "mdzz"
  },
  onLoad: function (options) {
    //swiper
    this.changeIndicatorDots()
    this.changeAutoplay()
    this.setData({
      viewList: viewList.viewList.result
    })
  },
  //添加active类
  chooseType(e) {
    this.setData({
      index: e.target.dataset.index
    }) 
  },
  //swiper开始
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  //swiper结束

   // 进入景点列表
   enterViewList(e) {
     console.log(e.currentTarget.id)
     let id = e.currentTarget.id
     wx.navigateTo({
       url: 'view-list/view-list?id=' + id
     })
   },
  // 进入景点详情
  enterDetail(e) {
    let sid = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: 'view-detail/view-detail?sid=' + sid + ''
    })
  },
  
  // 动画
  enterAnimate() {
    let animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    animation.opacity(1).step()
    this.setData({
      animationData: animation.export()
    })
  },
  leaveAnimate() {
    let animation = wx.createAnimation({
      duration: 100,
      timingFunction: 'ease',
    })
    animation.opacity(0).step()
    this.setData({
      animationData: animation.export()
    })
  },
  // 获取周边热门游
  getaroundView() {
    this.tabGetData(true,true,"aroundViewList",cityName)
  },
  // 获取国内热门游游
  getcountryView() {
    this.tabGetData(false,true,'countryViewList',"北京")
    let arr = []
    arr.push(this.data.viewList[0])
    this.setData({
      viewList: arr
    })
    console.log(this.data.viewList)
  },

  tabGetData(active,loading, key, city) {
    let _this = this;
    this.leaveAnimate();
    this.setData({
      active: active,
      loading: loading,
      viewList: viewList.viewList.result
    })
    if (wx.getStorageSync(key)) {
      this.setData({
        loading: !loading,
        
      });
      this.enterAnimate();
    }
    
  }
 
})
