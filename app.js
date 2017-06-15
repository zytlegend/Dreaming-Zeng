App({
    globalData: {
      userinfo:null
    },
    getUserInfo:function(cb){
      var that = this
      if(this.globalData.userinfo){
        typeof cb == "function" && cb(this.globalData.userInfo)
      }else{
        wx.login({
          success: function(res) {
            wx.getUserInfo({
              withCredentials: true,
              success: function(res) {
                that.globalData.userInfo = res.userInfo
                typeof cb == "function" && cb(that.globalData.userInfo)
              },
              fail: function(res) {},
              complete: function(res) {},
            })
          },
          fail: function(res) {},
          complete: function(res) {},
        })
      }
    },

})
