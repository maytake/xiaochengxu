// components/tips/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    locationTop: {
      type: Number,
      value: 0
    },
    tipsText: {
      type: String,
      value: '提示文字'
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false,
    timeHide:1000
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //隐藏弹框
    hidetips() {
      this.setData({
        isShow: !this.data.isShow
      })
    },
    //展示弹框
    showtips() {
      let timer = null,
        _this = this

      this.setData({
        isShow: !this.data.isShow
      })
      clearTimeout(timer)
      timer = setTimeout(function () {
        _this.setData({
          isShow: !_this.data.isShow
        })
      }, _this.data.timeHide)
    },

  }
})
