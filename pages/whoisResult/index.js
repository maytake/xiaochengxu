let util = require('../../utils/util.js'),
  getData = require('../../mock/data.js'),
  failData = require('../../mock/data.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    sercherStorage: [],
    inputVal: "",             //搜索框输入的值  
    hiddenClear: true,          //搜索的打叉
    TipText: "恭喜您！提交成功",
    defaultR: true,              //搜索的默认结果
    regInfo: [],
    allInfo: [],
    dmSuccess: false,

    inputShowed: false,// 显示搜索
    getSearch: [],//获取缓存值
    modalHidden: true,//确定是否删除历史记录
  },

  onLoad(options) {
    let domain = util.trim(options.domain); //传入参数
    this.tips = this.selectComponent("#tips");
    if (domain) {
      this.setData({
        inputVal: domain
      })
      this.showInput();
      this.hideDefault();
      this.requireData();
    }
  },
  onShow: function () {
    var getSearch = wx.getStorageSync('searchData');
    this.setData({
      getSearch: getSearch
    })
  },
  // 显示搜索
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
   wx.navigateBack()
  },
  //清空
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  //跟新input值
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
  //点击历史记录搜索
  searchHistory:function(e){
    let v = e.currentTarget.dataset.text;
    console.log(v);
    this.setData({
      inputVal:v
    })
    this.query()
  },
  //搜索事件
  query: function() {
    let data, _this = this,
      vl = util.trim(this.data.inputVal);
    let localStorageValue = [];

    if (!this.regE(vl)) {
      this.saveStorage(vl);
      this.requireHttp();
      this.showInput();
      //调用API从本地缓存中获取数据
    
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


  //获取缓存值并存入getSearch
  saveStorage: function (vl) {
    var searchData = wx.getStorageSync('searchData') || [];
    searchData.push(vl);
    let newSearchData = Array.from(new Set(searchData));
    wx.setStorageSync('searchData', newSearchData);
    this.setData({
      getSearch: searchData
    })
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
      modalHidden: true,
      getSearch: []
    })

  },
  //确认取消
  modalChangeCancel: function () {
    this.setData({
      modalHidden: true
    })
  },


  //隐藏默认页面
  hideDefault() {
    this.setData({
      defaultR: false
    })
  },

  //提示组件
  tipsFn(txt, times) {
    this.tips.showtips();
    this.tips.setData({
      timeHide: times
    })
    this.setData({
      TipText: txt
    })
  },

  //展示全部文字
  showArrow(e) {
    this.setData({
      dropdown: !this.data.dropdown
    })
  },
  //模拟请求
  requireHttp() {
    let _this = this, timer = null,
      vl = util.trim(this.data.inputVal)

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

