// pages/person/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    personlist:'displayshow',
    personimageslist:'displayhidden',
    personfavorites:'displayhidden',
    title:'',
    id:''
  },
  onLoad: function (options) {
    this.setData({
      title: options.title,
      id: options.id
    })
  },
  tabclick:function(e){
    if(e.currentTarget.id=="dongtai"){
      this.setData({
        personlist: 'displayshow',
        personimageslist: 'displayhidden',
        personfavorites: 'displayhidden'
      })
    }
    else if(e.currentTarget.id=="tuku"){
      this.setData({
        personlist: 'displayhidden',
        personimageslist: 'displayshow',
        personfavorites: 'displayhidden'
      })
    }
    else{
      this.setData({
        personlist: 'displayhidden',
        personimageslist: 'displayhidden',
        personfavorites: 'displayshow'
      })
    }
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