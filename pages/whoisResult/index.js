let util = require('../../utils/util.js'),
  getData = require('../../mock/data.js'),
  failData = require('../../mock/data.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    sercherStorage: [],
    inputValue: "请输入要查询的域名，如abc.com",             //搜索框输入的值  
    StorageFlag: false,         //显示搜索记录标志位
    hiddenClear: true,          //搜索的打叉
    TipText: "恭喜您！提交成功",
    defaultR: true,              //搜索的默认结果
    whoispath:'../whoisResult/index',
    regInfo: [],
    allInfo: [],
    dmSuccess: false
  },

  onLoad(options) {
    let domain = util.trim(options.domain) //传入参数
    this.tips = this.selectComponent("#tips")
    if (domain) {
      this.setData({
        inputValue: domain
      })
      this.hideDefault()
      this.requireData()
    }
  },
  hideDefault() {//隐藏默认页面
    this.setData({
      defaultR: false
    })
  },
  tipsFn(txt, times) {
    this.tips.showtips();
    this.tips.setData({
      timeHide: times
    })
    this.setData({
      TipText: txt
    })
  },


  tapSercher() {
    wx.redirectTo({
      url: '../searchbar/index?path=' + this.data.whoispath + '&searchName=' + this.data.inputValue
    })
  },

  showArrow(e) {
    this.setData({
      dropdown: !this.data.dropdown
    })
  },

  requireHttp() {
    let _this = this, timer = null,
      vl = util.trim(this.data.inputValue)
 
      //模拟请求
      wx.showLoading({
        title: '加载中',
      })
      clearTimeout(timer)
      setTimeout(function () {
        _this.requireData();
      }, 500)
    
  },
  requireData() {
    this.hideDefault()//隐藏默认页面 
    wx.hideLoading()
    let regInfo = getData.successData.data.regInfo,
      allInfo = getData.successData.data.allInfo.split('\n'),
      successR = getData.successData.success
    this.setData({
      dmSuccess: successR,
      regInfo: regInfo,
      allInfo: allInfo
    })
  }
})

