var util = require('../../utils/util.js')

Page({
  data: {
    banners: [
      'banner/1.jpg',
      'banner/2.jpg',
      'banner/3.jpg'
    ],
    menus: [{
      src: 'menu/order.png',
      text: '我的订单'
    }, {
      src: 'menu/customer.png',
      text: '我的客户'
    }, {
      src: 'menu/commision.png',
      text: '我的佣金'
    }],
    products: [{
      hot: true,
      title: '固定收益类产品一',
      type: '固收',
      incomePercent: '10%',
      minAmount: '100万元',
      term: '12个月',
      commisionPercent: '2.4%',
      progress: 20
    }]
  },
  addItem: function () {
    var index = this.data.products.length
    var newItem = {
      hot: !(index % 2),
      title: `固定收益类产品${util.numberToChinese(index + 1)}`,
      type: '固收',
      incomePercent: `${parseFloat(Math.random() * 12).toFixed(1)}%`,
      minAmount: `${parseInt(Math.random() * 500)}万元`,
      term: `${parseInt(Math.random() * 24)}个月`,
      commisionPercent: `${parseFloat(Math.random() * 6).toFixed(1)}%`,
      progress: parseInt(Math.random() * 100)
    }

    this.setData({
      products: [newItem].concat(this.data.products)
    })
  }
})