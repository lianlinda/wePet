// pages/shoppingBag/shoppingBag.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    netOK: true,// 网络是否ok
    isLogin: true,//是否登录
    isEmpty: false,//购物车是否为空
    isEdit: false,//是否编辑
    checkboxColor: '#e60a30',
    sumMoney: 0,
    goods: [
      {
        id: 1,
        shopId: 1,
        shopName: '旗舰店',
        coupon: true,
        shopIcon: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2102914940,3169224642&fm=26&gp=0.jpg',
        list: [
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            num: 1,
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2,
            stand: '瓶装'
          },
          {
            id: 2,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            num: 1,
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 3
          }
        ]
      },
      {
        id: 2,
        shopId: 2,
        shopName: '旗舰店',
        shopIcon: null,
        list: [
          {
            id: 2,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            num: 2,
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 1
          }
        ]
      },
      {
        id: 3,
        shopId: 2,
        shopName: '旗舰店',
        shopIcon: null,
        list: [
          {
            id: 2,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            num: 2,
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 1
          }
        ]
      }
    ],
    recommendGoods: [
      {
        goodsId: 1,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 1,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 2,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 3,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 3,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 2,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 4,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 14,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 5,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 14,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 6,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 14,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 7,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 14,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 8,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 14,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 9,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 14,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      },
      {
        goodsId: 10,
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
        price: 14,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        flag: ''
      }]
  },

  goGoodsDetail: function (e) {
    const goodsId = e.currentTarget.dataset.goodsId;
    wx.navigateTo({
      url: `/pages/goodsDetail/goodsDetail?goodsId=${goodsId}`
    })
  },

  onSubmit: function () {
    wx.navigateTo({
      url: '/pages/goods/detail/detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getUserInfo({
    //   complete: (res) => {},
    // })
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
