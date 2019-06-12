// pages/daylist/daylist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inmoney: 400.00,
    cost: 1000.00,
    little: -200.00,
    row1: "",
    row2: "",
    row3: "",
    currentTab: 0,
    date:"2018-6-28"
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  //点击切换
  clickTab: function (e) {

    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  toUppage:function(){
    wx.navigateTo({
      url: '../upPage/upPage',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var list5 = [this.data.inmoney, this.data.cost, this.data.little];
    var index5 = list5.indexOf(Math.max.apply(null, list5));
    var max = Math.max.apply(null, list5);
    console.log(list5)
    console.log(max)
    console.log(index5)
    var unit = 380 / max;
    console.log(unit)

    this.setData({
      row1: list5[0] * unit,
      row2: list5[1] * unit,
      row3: list5[2] * unit,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})