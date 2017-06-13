//index.js
Page({

  /**
   * 页面的初始数据
   */
  touchStart:function(e){
    console.log(e.timeStamp + '- touch start') 
    console.log(e.touches[0].pageX)
  },
  touchMove:function(e){
    console.log(e.timeStamp + '- touch move')
    console.log(e.touches[0].pageX)
  }
})