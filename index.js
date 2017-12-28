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
		 * @return json 返回一组含有浏览器名称以及正则表达式的json
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
		}
	}
}