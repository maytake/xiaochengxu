//index.js


let util = require('../../utils/util.js')
let api = require('../../config/api.js')

const app = getApp()

Page({
  data: {
  
  },



  tapSercher() {
    wx.navigateTo({
      url: "../searchbar/index"
    })
  },


})