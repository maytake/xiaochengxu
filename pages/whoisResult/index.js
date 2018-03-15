let util = require('../../utils/util.js'),
  getData = require('../../mock/data.js'),
  failData = require('../../mock/data.js')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    sercherStorage: [],
    inputValue: "",             //搜索框输入的值  
    StorageFlag: false,         //显示搜索记录标志位
    hiddenClear: true,          //搜索的打叉
    TipText: "恭喜您！提交成功",
    defaultR:true,              //搜索的默认结果

    regInfo: [],
    allInfo: [],
    dmSuccess: false
  },

  onLoad(options) {
    let domain = util.trim(options.domain) //传入参数
    this.tips = this.selectComponent("#tips")
    if (domain) {
      this.hideDefault()
    }
  },
  hideDefault(){//隐藏默认页面
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
    let timer = null, _this = this
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
    this.requireHttp()
  },
  
  showArrow(e){
    this.setData({
      dropdown: !this.data.dropdown
    })
  },
  query(){

  },
  requireHttp(){
    let _this = this,
        vl = util.trim(this.data.inputValue)

    
    if (!this.regE(vl)) {
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


  }
})

    // wx.showLoading({
    //   title: '加载中',
    // })