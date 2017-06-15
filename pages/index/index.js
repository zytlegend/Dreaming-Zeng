//index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  onLoad:function(){
    console.log('onload');
    var that = this;
    app.getUserInfo(function(userInfo){
      that.setData({
        userInfo:userInfo
    })
    })
  },
  touchStart:function(e){
    console.log(e.timeStamp + '- touch start') 
    console.log(e.touches[0].pageX)
  },
  touchMove:function(e){
    console.log(e.timeStamp + '- touch move')
    console.log(e.touches[0].pageX)
  }
})