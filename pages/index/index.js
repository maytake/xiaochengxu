//index.js


let util = require('../../utils/util.js')
let api = require('../../config/api.js')

const app = getApp()

Page({
  data: {
    sercherStorage: [],
    inputValue: "",             //搜索框输入的值  
    StorageFlag: false,         //显示搜索记录标志位
    hiddenClear: true,
    TipText: "恭喜您！提交成功"
  },

  onLoad() {
    this.tips = this.selectComponent("#tips");

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
  domainInput(e) {
    let inputV = e.detail.value,
      inputLength = inputV.length

    this.setData({
      inputValue: inputV
    })
    this.showCloseIcon(inputLength)
 
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
  showCloseIcon(inputLength) {
    let timer = null,_this=this
    // 清空input
    clearTimeout(timer)
    timer = setTimeout(function () {
      if (inputLength > 0) {
        console.log(1)
        _this.setData({
          hiddenClear: false
        })
      } else {
        _this.setData({
          hiddenClear: true
        })
      }
    }, 200)
  },
  clearInput() {
    this.setData({
      inputValue: "",
      hiddenClear: true
    })
  },
  tapSercher() {
    let vl = util.trim(this.data.inputValue)
    // wx.showLoading({
    //   title: '加载中',
    // })
    if (!this.regE(vl)) {
      wx.hideLoading()
      wx.navigateTo({
        url: "../whoisResult/index?domain=" + vl
      })
    }

  },
  query() {
    let vl = util.trim(this.data.inputValue)
    wx.navigateTo({
      url: "../whoisResult/index?domain=" + vl
    })
  }
})