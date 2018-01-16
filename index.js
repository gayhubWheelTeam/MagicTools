/**
 * @name 魔法工具箱
 * @author Magic.H
 * @version 1.0.0
 * @date 2017.12.15
 */

function MagicTools() {
    return {
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
         * 数组去重
         * 遍历数组，建立新数组，利用indexOf判断是否存在于新数组中，不存在则push到新数组，最后返回新数组
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
            let ret = [];
            for (var i = 0, j = array.length; i < j; i++) {
                if (ret.indexOf(array[i]) === -1) {
                    ret.push(array[i]);
                }
            }
            return ret;
        },
        /*
        * 获取URL地址里的参数
        *@param name 需要获取到的参数
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

        }
    }
}