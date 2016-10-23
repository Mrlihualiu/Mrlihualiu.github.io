
window.onload = function(){
   $('signup').onclick = function(){
       $('input-1').style.display = 'none';
       $('input-0').style.display = 'block';
       removeClass(this);

   };
   $('signin').onclick = function(){
       $('input-0').style.display = 'none';
       $('input-1').style.display = 'block';
       removeClass(this);
   }
   //下载APP二维码的显示与隐藏
   $('down-app').onclick = function(){
   	var rng = this;
   	var iImg = $('two-dimensional-code');
   	if(rng.innerHTML === "下载知乎 APP"){
       rng.innerHTML = "关闭二维码";
       iImg.style.display = 'block';
   	}else{
   		rng.innerHTML = "下载知乎 APP";
   		iImg.style.display = 'none';
   	}
   }
}

function $(id){return document.getElementById(id);}
function removeClass(name){
	var li = $('ul').getElementsByTagName('li');
	for(var j=0;j<li.length;j++){
		li[j].className = " ";
		}
		name.className = "sign";
}
// window.onload = function(){
// 	var li = $('ul').getElementsByTagName('li');
// 	for(var i=0;i<li.length;i++){
// 		li[i].onclick = function(){
// 			for(var j=0;j<li.length;j++){
// 				li[j].className = " ";
// 			}
// 			this.className = "sign";
// 			if(i == 0){
// 				$('input-1').style.display = 'none';
//                 $('input-0').style.display = 'block';
// 			}else{
// 				$('input-0').style.display = 'none';
//                 $('input-1').style.display = 'block';
// 			}

// 		}
// 	}
// }