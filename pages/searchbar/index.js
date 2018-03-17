let util = require('../../utils/util.js')
Page({
  data: {
    inputShowed: false,
    inputVal: "",
    selectHide: false,
    getSearch: [],
    modalHidden: true
  },
  onShow: function () {
    this.tips = this.selectComponent("#tips")
    var getSearch = wx.getStorageSync('searchData');
    this.setData({
      getSearch: getSearch,
      inputValue: ''
    })
  },

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },

  //取消搜索
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
    wx.navigateBack(); 
    this.navigateBack();
  },
  //返回上一级
  navigateBack: function () {
    var self = this;
    var pages = getCurrentPages();
    if (pages.length == 1) {
      if (pages.data.whoispath) {
        wx.redirectTo({
          url: pages.data.whoispath
        });
      } else {
        wx.switchTab({
          url: "../index/index"
        });
      }
    } else {
      wx.navigateBack({ changed: true });
    }
  },  


  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  //提示弹窗
  tipsFn(txt, times) {
    this.tips.showtips();
    this.tips.setData({
      timeHide: times
    })
    this.setData({
      TipText: txt
    })
  },
  //搜索事件
  query: function () {
    let data,
      vl = util.trim(this.data.inputVal);
    let localStorageValue = [];
    if (vl != '') {
      //调用API从本地缓存中获取数据
      var searchData = wx.getStorageSync('searchData') || []
      searchData.push(vl)
      wx.setStorageSync('searchData', searchData)
      if (!this.regE(vl)) {
      wx.navigateTo({
        url: '../whoisResult/index?domain=' + vl
      })
      }
    } else {
      this.tipsFn("请输入要查询的域名", 2000)
    }
   
  },
  regE: function (valX) {
    var reg = /^[\w\d-\.\n\u4e00-\u9fa5]*$/,
      reg2 = /_/g,
      reg3 = /.*-$/g,
      reg4 = /^-.*/g;

    var vlength = valX.replace(/[\u4e00-\u9fa5]/g, 'aaa')
    if (vlength) {
      var chineseLength = vlength.length;
    }
    if (!valX) {
      this.tipsFn("请输入要查询的域名", 2000)
      return true;
    };
    if (valX.length > 64 || chineseLength > 64) {
      this.tipsFn("您输入的域名不符合域名注册规则，请重新输入", 2000)
      return true;
    };
    if (!reg.test(valX) || reg2.test(valX) || reg3.test(valX) || reg4.test(valX)) {
      this.tipsFn("您输入的域名含有非法字符！", 2000)
      return true;
    };
  },






  //清除历史记录
  clearSearchStorage: function () {
    this.setData({
      modalHidden: false
    })
  },
  //确认清除
  modalChangeConfirm: function () {
    wx.setStorageSync('searchData', [])
    this.setData({
      modalHidden: true
    })
    wx.redirectTo({
      url: '../searchbar/index'
    })
  },
  //确认取消
  modalChangeCancel: function () {
    this.setData({
      modalHidden: true
    })
  },

});