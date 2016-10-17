function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function numberToChinese (num) {
  var r, n, x = 0, zero = num % 10 === 0, v = num;
  var unit = ['','','十','百','千','万'];
  var n2c = ['零','一','二','三','四','五','六','七','八','九'];
  if (v * 1 === 0) return n2c[0]
  while (v > 0) {
    x++;
    n = v % 10;
    v = window.Math.floor(v /= 10);
    if (n === 0 && v % 10 === 0) continue;
    r = (r ? n2c[n] + (n ? unit[x] : '') + r : n2c[n]);
  }
  return zero ? r.substr(0, r.length - 1) : r;
}

module.exports = {
  formatTime: formatTime,
  numberToChinese: numberToChinese
}
