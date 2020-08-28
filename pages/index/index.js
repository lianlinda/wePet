// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: '搜索：商品 分类 品牌 国家',
    banner: [
      {
        id: 1,
        image: 'https://img.alicdn.com/tfs/TB1_YIeaq5s3KVjSZFNXXcD3FXa-520-280.jpg_q90_.webp',
        url: 'www.baidu.com',
      },
      {
        id: 2,
        image: 'https://img.alicdn.com/tfs/TB1aQH0aECF3KVjSZJnXXbnHFXa-520-280.jpg_q90_.webp',
        url: 'www.baidu.com',
      }
    ],
    singleImage: {
      image: 'https://img.alicdn.com/simba/img/TB1N9hbaGSs3KVjSZPiSuwsiVXa.jpg',
      url: 'www.baidu.com',
      width: '100%',
      height: '200rpx'
    },
    group: [
      {
        id: 1,
        groupPrice: 12,
        price: 24,
        groupPerson: 2,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖'
      },
      {
        id: 2,
        groupPrice: 12,
        price: 24,
        groupPerson: 2,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖'
      },
      {
        id: 2,
        groupPrice: 12,
        price: 24,
        groupPerson: 2,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖'
      },
      {
        id: 2,
        groupPrice: 12,
        price: 24,
        groupPerson: 2,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖'
      },
      {
        id: 2,
        groupPrice: 12,
        price: 24,
        groupPerson: 2,
        image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
        name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖'
      }
    ],
    floorList: [
      {
        id: 1,
        name: '新品首发',
        type: 'twoColumns',
        goodsList: [
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          },
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          },
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          }
        ]
      },
      {
        id: 2,
        name: '居家生活',
        type: 'threeColumns',
        image: 'https://img.alicdn.com/tfs/TB11mOyhRFR4u4jSZFPXXanzFXa-520-280.jpg_q90_.webp',
        goodsList: [
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          },
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          },
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          },
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          }
        ]
      },
      {
        id: 3,
        name: '餐厨用品',
        goodsList: [
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          },
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          },
          {
            id: 1,
            name: '可乐可乐 无糖无糖 可乐可乐 无糖无糖',
            image: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/imgextra/i3/247100163/O1CN01bEgzYp1D4h36iyCjs_!!0-saturn_solar.jpg_250x250.jpg_.webp',
            price: 2
          }
        ]
      }
    ]
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
  // 去搜索页
  goSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },
  // 跳转至商品详情页
  goDetail: function (e) {
    //console.log(e.currentTarget.dataset.id)
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/goods/detail/detail?id=${id}`
    })
  },
})