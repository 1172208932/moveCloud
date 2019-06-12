// pages/firstout/firstout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showView: true,
  },
  totextpage:function(){
    wx.navigateTo({
      url: '../textPage/textPage',
    })
  },
  toDay:function(){
    wx.navigateTo({
      url: '../daylist/daylist',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 录音开始
  voicebegin: function() {
    this.setData({
      showView: false,  
    })
    var s = this;
    console.log("start");
    wx.startRecord({
      success: function(res) {
        console.log(res);
        var tempFilePath = res.tempFilePath;
        s.setData({
          recodePath: tempFilePath,
          isRecode: true
        });
      },
      fail: function(res) {
        console.log("fail");
        console.log(res);
        //录音失败
      }
    });
  },
  // 跳转首页
  to_index:function(){
    wx.reLaunch({
      url: '../index/index',
    })
  },


  voiceend: function() { //结束录音 
    this.setData({
      showView: true,  
    })
    var s = this;
    console.log("end");
    wx.stopRecord();
    s.setData({
      isRecode: false
    });
    wx.showToast();
    setTimeout(function() {
      // var urls = app.globalData.urls + "/Web/UpVoice";
      console.log(s.data.recodePath);
      wx.uploadFile({
        url: urls,
        filePath: s.data.recodePath,
        name: 'file',
        header: {
          'content-type': 'multipart/form-data'
        },
        success: function(res) {
          var str = res.data;
          var data = JSON.parse(str);
          if (data.states == 1) {
            var cEditData = s.data.editData;
            cEditData.recodeIdentity = data.identitys;
            s.setData({
              editData: cEditData
            });
          } else {
            wx.showModal({
              title: '提示',
              content: data.message,
              showCancel: false,
              success: function(res) {

              }
            });
          }
          wx.hideToast();
        },
        fail: function(res) {
          console.log(res);
          wx.showModal({
            title: '提示',
            content: "网络请求失败，请确保网络是否正常",
            showCancel: false,
            success: function(res) {

            }
          });
          wx.hideToast();
        }
      });
    }, 1000)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})