
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        'Accept': 'application/json',
        'X-Nideshop-Token': wx.getStorageSync('token')
      },
      success: function (res) {
        //console.log(res.data.data);
        if (res.statusCode == 200) {
          resolve(res);
        }
      }
    })
  })
}



function getToken(mycode) {
  mycode = mycode.toUpperCase();
  let getTokenB = wx.getStorageSync('token');
  if (!getTokenB) {
    let token = '';
    let url = 'https://ysx1wx.na.wang/site/getAccessToken';
    if (!mycode){
      mycode = 100001;
    }

    wx.request({
      url: url,
      data: { code: mycode },
      method: 'POST',
      dataType:'JSON',
      header: {
        'Accept': 'application/json',
        'X-Nideshop-Token': wx.getStorageSync('token')
      },
      success: function (res) {
        //console.log(res.data.data);
        if (res.statusCode == 200) {
          token = res.data.AccessToken;
          wx.setStorageSync('token', token);
        }
      }
    })


  } else{
    token = wx.getStorageSync('token');
  }
  return token;
}

function trim(str) { //删除左右两端的空格
  if (str !== undefined){
    return str.replace(/(^\s*)|(\s*$)/g, "");
  }
}



module.exports = {
  formatTime,
  request,
  getToken,
  trim,
}
