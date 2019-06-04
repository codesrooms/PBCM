// client/pages/addBank/addBank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setSum:false        //设置金额

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  // 支付权限分配
  radioChange:function(e){
   console.log(e)
  },

  //加入是否充值
  radioTop:function(e){
    console.log(e)
    if (e.detail.value == '1'){
      this.setData({setSum:true})

    }else{
      this.setData({ setSum: false })
    }
  }

})