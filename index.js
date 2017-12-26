/**
 * @name 魔法师工具箱
 * @author Magic.H
 * @version 1.0.0
 * @date 2017.12.15
 */

function MagicTools() {
	return {
		/**
		 * 判断微信浏览器
		 * @param null
		 * @return boolean
		*/
		isWeiXin: function () {
			var ua = window.navigator.userAgent.toLowerCase(); // 读取浏览器ua
			var exp = '/MicroMessenger/i'; // 微信浏览器正则表达式 忽略大小写
			if (ua.match(exp) == 'micromessenger') { // 判断是否为微信浏览器
				return true;
			} else {
				return false;
			}
		}
	}
}