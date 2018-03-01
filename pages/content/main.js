Page({
  data: {
    imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg','http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',   'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    attry:[
      {title:'大数据时代，谁拥有数据源，谁就是数据之王',img:'/image/article/t1.png'},
      {title:'投资铁律：互联网抢入口，大数据控制数据源',img:'/image/article/t2.png'},
      {title:'美国在大数据立法方面为何采取战略性模糊的策略',img:'/image/article/t3.png'},
      {title:'中国电子商务发展了16年才迎来了第一部《中国电子商务法》',img:'/image/article/t4.png'},
      {title:'为什么世界前前30名互联网公司没有欧洲公司，因为立法太严格！',img:'/image/article/t5.png'},
      {title:'九次方大数据"数据秤砣"破解农产品产销难题',img:'/image/article/t6.png'},
      {title:'内蒙古大数据产业发展有限公司落户呼市，优化产业发展结构',img:'/image/article/t7.png'}
    ],
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  getDetail: function(e){
    var articleId =e.currentTarget.dataset.index;
        // console.log(articleId);
    wx.navigateTo({
      url: 'article?articleId='+ articleId
    })
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    wx.setNavigationBarTitle({
    title: '公司新闻'
    });
    wx.showNavigationBarLoading()
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
   wx.hideNavigationBarLoading()
  },
  changeIndicatorDots: function(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value
    })
  }
})