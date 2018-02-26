/**
 * @name 常用js代码小轮子
 * @author Magic Liang
 * @version 1.0.0
 * @date 2017.12.15
 */

let MagicTools = {
    /**
     * 浏览器列表
     * @param browerName 浏览器名称
     * @return {object} 返回一组含有浏览器名称以及正则匹配得到的浏览器名称
     */
    _Borwers: function (browerName) {
        browerName = browerName.toLowerCase();
        let ua = window.navigator.userAgent.toLowerCase(); // 获取浏览器ua
        let exp = {
            type: '',
            msg: ''
        };
        switch (browerName) {
            case 'wx': // 微信
                exp.type = ua.match(/MicroMessenger/i);
                exp.msg = 'micromessenger';
                break;
            case 'chrome': // 谷歌
                exp.type = ua.match(/Chrome/i);
                exp.msg = 'chrome';
                break;
            case 'safari': // 苹果
                exp.type = ua.match(/Safari/i);
                exp.msg = 'safari';
                break;
            case 'opera': // 欧朋
                exp.type = ua.match(/Opera/i);
                exp.msg = 'opera';
                break;
            default:
                console.error("Can't find this browser!");
                break;
        }
        return exp;
    },
    /**
     * 判断浏览器
     * @param browerName 浏览器名称
     * @return boolean
     */
    isBrower: function (browerName) {
        let exp = this._Borwers(browerName);
        return (exp.type == exp.msg && exp.type !== '' && exp.msg !== '') ? true : false;
    },
    /**
     * 判断是否为数组
     * @param o 待检测参数
     * @return boolean
     */
    isArray: function (o) {
        return Object.prototype.toString.call(o) == '[object Array]';
    },
    /**
     * 数组去重 es6
     * @param array 原始数组
     * @return [arr] 去重后数组
     */
    removeDuplicatedItem: function (array) {
        // 判断是否为数组
        if (!this.isArray(array)) {
            console.error('parameter error');
            return;
        }
        if (array.length == 0) {
            return new Array();
        }
        let ret = [...new Set(array)];
        return ret;
    },
    /*
    * 获取URL地址里的指定参数
    * @param name 需要获取到的参数
    * 如：www.xxx.com?code="abc"------getUrlParam('code')--->'abc'
    * */
    getUrlParam: function (name) {
        let isParam = window.location.hash.split('?')[1]
        if (isParam) {
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            let param = isParam.match(reg);
            if (param != null) return decodeURIComponent(param[2]);
            return null;
        }
    },
    /**
     *  浮点数取整
     *  @param float_num 传递的小数 如123.456
     *  @returns  int_num 整数 如123
    */
    floatToInt: function (float_num) {
        let temp = float_num;
        // 如果是负数
        if (float_num < 0) {
            temp = Math.abs(float_num);
            return '-' + Math.floor(temp);
        }
        return Math.floor(temp);
    },
    /**
     * 生成4~6位数字验证码
     * @param num 验证码位数
     * @returns code 验证码
    */
    validCode: function (num) {
        if (num < 4 || num > 6 || num == null) {
            console.error('please enter the number between 4 and 6');
        } else {
            return ('000000' + Math.floor(Math.random() * 999999)).slice(-parseInt(num));
        }
        
    },
    /**
     * 随机生成16进制颜色代码
     * @param null
     * @returns color_code 颜色代码
    */
    createColor: function () {
        return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
    },
    /**
     * 获取url查询参数并转为json格式 es5
     * @param  
     * @returns obj json对象
    */
    getUrlParamToObj: function () {
        let isParam = window.location.hash.split('?')[1];
        if (isParam) {
            let obj = {};
            isParam.split('&').forEach(function (item) {
                (function (kv) {
                    obj[kv[0]] = kv[1];
                })(item.split('='));
            })
            return obj;
        } else {
            return null;
        }
    }
}