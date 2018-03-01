//获取应用实例
var app = getApp()

Page({
  data:{
    userInfo: {},
    myarry:[
      {lable:'性别',detail:'男'},
      {lable:'地区',detail:'安道尔'},
      {lable:'个性签名',detail:'你猜呢'}
    ]
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo);
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });
    wx.setNavigationBarTitle({
    title: '个人中心'
    });
    wx.showNavigationBarLoading()
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    wx.hideNavigationBarLoading()
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})