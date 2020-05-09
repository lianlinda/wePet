// pages/goodsDetail/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTab: true,//是否显示顶部导航栏
    showSelect: false,//是否显示选择区
    toView: 'goods',
    goodsInfo: {
      goodsId: 1,
      goodsName: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
      goodsPrice: 2,
      goodStand: '瓶装',
      mainImage: [{
        id: 1,
        url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp'
      }, {
        id: 2,
        url: 'https://img.alicdn.com/simba/img/TB1N9hbaGSs3KVjSZPiSuwsiVXa.jpg'
      }]
    },
    detailImages: [{
      id: 1,
      url: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp'
    }, {
      id: 2,
      url: 'https://img.alicdn.com/simba/img/TB1N9hbaGSs3KVjSZPiSuwsiVXa.jpg'
    }],
    commentInfo: {
      num: 10,
      commentList: [{
        userId: 1,
        userName: '测试',
        userHeadPortrait: '',
        content: '很好',
        createdTime: '2019-06-25 14：17：00'
      }]
    },
    shopInfo: {
      shopId: 1,
      shopName: '叶子的店',
      shoplogo: '',
      userId: 1,
      userName: '叶子'
    },
    recommendList: [{
      goodsId: 1,
      goodsName: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
      goodsNum: 1,
      goosImage: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
      goodsPrice: 2,
      goodStand: '瓶装'
    }, {
        goodsId: 1,
        goodsName: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        goodsNum: 1,
        goosImage: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        goodsPrice: 2,
        goodStand: '瓶装'
    }, {
        goodsId: 1,
        goodsName: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        goodsNum: 1,
        goosImage: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        goodsPrice: 2,
        goodStand: '瓶装'
    }]
  },

  /**
   * 点击顶部导航栏跳转到对应位置
   */
  clickToView: function(e) {
    let toView = e.target.dataset.id;
    this.setData({
      toView: toView
    })
  },

  /**
   * 点击选择按钮弹出选择规格框
   */
  showSelect() {
    this.setData({
      showSelect: true
    })
  },

  goGoodsDetail: function (e) {
    const goodsId = e.currentTarget.dataset.goodsId;
    wx.navigateTo({
      url: `/pages/goodsDetail/goodsDetail?goodsId=${goodsId}`
    })
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

  }
})