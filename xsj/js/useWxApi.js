/*  Project:    use Wechat  jsapi
 *   Create:    2015/01/27  17:00   
 *   Author:    Yanximin
 *   Update:    2016/03/24  12:22
 *  Version:    2.1
 */
var usewxapi = {
    getSignature: function() {
        var This = this;
        var paramLength = arguments.length;
        var arg = arguments;

        This.getWxTicket(function(data) {
            try {
                if (data) {
                    var params = {
                        debug: data.debug,
                        appId: data.appId,
                        timestamp: data.timestamp,
                        nonceStr: data.nonceStr,
                        signature: data.signature,
                        jsApiList: data.jsApiList
                    }

                    switch (paramLength) {
                        case 0:
                            alert('缺少参数');
                            break;
                        case 1:
                            wx.config(params);
                            wx.error(function(res) {
                                alert(res);
                            });
                            if (typeof arg[0] === 'object') {
                                wx.ready(function() {
                                    wx.onMenuShareTimeline(arg[0]);
                                    wx.onMenuShareAppMessage(arg[0]);
                                    wx.onMenuShareQQ(arg[0]);
                                    wx.onMenuShareWeibo(arg[0]);
                                    wx.onMenuShareQZone(arg[0]);
                                });
                            }

                            if (typeof arg[0] === 'function') {
                                wx.ready(function() {
                                    arg[0]();
                                });
                            }
                            break;
                        case 2:
                            if (arg[0].debug) params.debug = arg[0].debug;
                            wx.config(params);
                            wx.error(function(res) {
                                alert(res);
                            });
                            if (typeof arg[0] === 'object' && typeof arg[1] !== 'function') {
                                wx.ready(function() {
                                    wx.onMenuShareTimeline(arg[1]);
                                    wx.onMenuShareAppMessage(arg[1]);
                                    wx.onMenuShareQQ(arg[1]);
                                    wx.onMenuShareWeibo(arg[1]);
                                    wx.onMenuShareQZone(arg[1]);
                                });
                            } else if (typeof arg[0] === 'object' && typeof arg[1] === 'function') {
                                wx.ready(function() {
                                    arg[1]();
                                });
                            }
                            break;
                    }
                } else {
                    alert('interface error');
                }
            } catch (e) {
                alert(e);
            }
        });
    },
    getWxTicket: function(fn) {
        $.ajax({
            url: "http://api.zt.game.xoyo.com/wechat/jssdk/xsj_lab?callback=jQuery_DDDDDDDDDDD",
            type: "GET",
            dataType: "jsonp",
            data: { url: location.href.split('#')[0] },
            success: function(data) {
                if (fn) {
                    fn(data);
                }
            }
        });
    }
};
