//index.js


let util = require('../../utils/util.js')
let api = require('../../config/api.js')

const app = getApp()

Page({
  data: {
    whoispath:'../whoisResult/index'
  },

  tapSercher() {
    wx.navigateTo({
      url: "../whoisResult/index"
    })
  },


})