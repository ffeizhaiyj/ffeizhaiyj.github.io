function $(id){
	return document.getElementById(id);
}
//封装获取样式的函数(兼容各大浏览器)
function getStyle(obj,attr){
			if(obj.currentStyle){
				return obj.currentStyle[attr];
			}else{
				return getComputedStyle(obj)[attr];
			}
		}