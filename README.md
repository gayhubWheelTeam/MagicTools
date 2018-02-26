
#### 使用方法：
```
<script src="index.js">
MagicTools.xxx()
```


### 1.判断浏览器
```
使用方法：isBrower(type);
传递参数：type -> 参数名称(参见下表)
返回数据：true or false
```
| 参数名称 | 说明 | 参数格式 |
| :-: | :-: | :-: |
| wx | 微信浏览器 | string |
| chrome | 谷歌浏览器 | string |
| safari | 苹果浏览器 | string |
| opera | 欧朋浏览器 | string |

### 2.判断是否为数组
```
使用方法：isArray(array);
传递参数：array -> 待检测参数
返回数据：true or false
```

### 3.数组去重
```
使用方法：removeDuplicatedItem(array);
传递参数：array -> 待去重数组
返回数组：去重后的数组
```
### 4.获取url地址里指定参数
```
使用方法：getUrlParam(name);
传递参数：name -> 要取的参数名称
如：www.xxx.com?code="abc"------MagicTools.getUrlParam('code')
返回数据：匹配到的参数值 or null. 上例中返回'abc'
```
### 5.浮点数取整 (支持负数)
```
使用方法：floatToInt(float_num);
传递参数：float_num -> 浮点数 支持负数 如 100.99 、-100.33
返回数据：取整数（负数则保留负号）
```
### 6.生成4~6位数字验证码
```
使用方法：validCode(num);
传递参数：num -> 验证码位数：4,5,6
返回数据：数字验证码
```

### 7.随机生成16进制颜色代码
```
使用方法：createColor();
返回数据：16进制颜色编码 如#ff0000
```
### 8. 获取url查询参数并转为json格式
```
使用方法：getUrlParamToObj();
返回数据：json数据 or null
```


