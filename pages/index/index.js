//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎进入',
    userInfo: {},
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    
  },
  login: function(){
    wx.navigateTo({
        url: '../content/main'
    })
  }
})
