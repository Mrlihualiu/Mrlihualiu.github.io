window.onload = function(){
	waterfall('main','box');
	//dataInt为后台传回的json格式的数据
	var dataInt = {"data":[{"src":"1.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"6.jpg"},{"src":"8.jpg"},{"src":"9.jpg"}]};
	window.onscroll = function(){
		if(checkScrollSlide){
			for(var i=0;i<dataInt.data.length;i++){
				var parent = document.getElementById('main');

				var oBox = document.createElement('div');
				oBox.setAttribute('class','box');
				parent.appendChild(oBox);

				var oPic = document.createElement('div');
                oPic.setAttribute('class','pic');
                oBox.appendChild(oPic);
				
                var oImg = document.createElement('img');
                oImg.src = "../img/" + dataInt.data[i].src;
                oPic.appendChild(oImg);
			}
			waterfall('main','box');
		}
	}
}

function waterfall(parent,clsName){
	//将mian下所有的box取出
    var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent,clsName);
    //计算整个页面显示的列数(页面宽/box宽)
    var oBoxWidth = oBoxs[0].offsetWidth;
    var clos = Math.floor(document.documentElement.clientWidth/oBoxWidth);
    //设置main的宽度和居中
    oParent.style.width = oBoxWidth*clos+'px';
    oParent.style.margin = '0'+' '+'auto';
    var hArr = [];//存放每一列高度的数组
    for(var i=0;i<oBoxs.length;i++){
    	if(i<clos){
    		hArr.push(oBoxs[i].offsetHeight);
    	}else{
    		var minH = Math.min.apply(null,hArr);
    		var index = getminHIndex(hArr,minH);
    		oBoxs[i].style.position = 'absolute';
    		oBoxs[i].style.top = minH + 'px';
    		oBoxs[i].style.left = oBoxWidth*index + 'px';
    		// oBoxs[i].style.left = oBoxs[index].offsetLeft + 'px';
            //改变数组
            hArr[index] += oBoxs[i].offsetHeight; 

    	}
    }
}

function getByClass(parent,ele){
	var all = parent.getElementsByTagName('*');
	var oClass = [];
	for(var i=0;i<all.length;i++){
		if(all[i].className == ele){
			oClass.push(all[i]);
		}
	}
	return oClass;
}

function getminHIndex(arr,val){
	for(var i in arr){
		if(arr[i] == val){
			return i;
		}
	}
}
//检测是否具有滚动加载数据块的条件
function checkScrollSlide(){
	var oParent = document.getElementById(parent);
    var oBoxs = getByClass(oParent,clsName);
    var lastBoxH = oBoxs[oBoxs.length-1].offsetTop+Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.body.clientHeight || document.documentElement.clientHeight;

    return (lastBoxH<scrollTop+height)?true:false;

}



