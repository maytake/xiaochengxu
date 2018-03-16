Page({
  data: {
    inputShowed: false,
    inputVal: "",
    selectHide: false,
    getSearch: [],
    modalHidden: true
  },
  
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
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

  query: function () {
    let data;
    let localStorageValue = [];
    if (this.data.inputVal != '') {
      //调用API从本地缓存中获取数据
      var searchData = wx.getStorageSync('searchData') || []
      searchData.push(this.data.inputVal)
      wx.setStorageSync('searchData', searchData)
      // wx.navigateTo({
      //   url: '../index/index'
      // })
     
    } else {
      console.log('空白的你搜个jb')
    }
   
  },
});