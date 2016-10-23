$(function(){
	sidebarShow();
	carshow(".hover",".city");
	carshow("#car","#car-show");
	lunbo();
	lunbo2();
});
//侧栏楼层导航的显示与隐藏
function sidebarShow(){
	var fli = $("#sidebar ul li");
	var fch = $("#sidebar ul li .sidebar-ch");
	var fnum = $("#sidebar ul li .sidebar-num");
	$(window).scroll(function(){
	    var top = $(document).scrollTop();
	    if(top > 600 && top < 3050){
		    $("#sidebar").show();
	    }else{
	    	 $("#sidebar").hide();
	    }
	    for(var i=0;i<fch.length;i++){
	    	if(top>=i*500+600 && top<(i+1)*500+600){
                fnum.eq(i).hide();
	    		fch.eq(i).show();
	    	}else{
	    		fnum.eq(i).show();
	    		fch.eq(i).hide();
	    	}
	    }
	});
}
//显示与隐藏
function carshow(parentID,showID){
	$(parentID).hover(
		function(){
			$(showID).show();
		},
		function(){
			$(showID).hide();
		});
}
//轮播
function lunbo(){
	var pics = $("#lunbo-pic li img");
	var nums = $("#num li");
	var i = 0;
	var timer = setInterval(function(){
		if(i == 6){
			i = 0;
		}
		pics.eq(i).show();
		for(var j=0;j<pics.length;j++){
			if(i != j){
				pics.eq(j).hide();
			}
		}
		nums.eq(i).addClass("active").siblings().removeClass("active");
		i++;
	},1000)
	$("#lunbo").hover(
		function(){
		    clearInterval(timer);
	},
	    function(){
	    	timer;
	    }
	);
	//鼠标滑过圆点
	$("#num li").hover(
		function(){
		    clearInterval(timer);
		    var index = $(this).index();
		    console.log(index);
            $(this).addClass("active").siblings().removeClass("active");
            pics.eq(index).show();
            for(var k=0;k<pics.length;k++){
            	if(k != index){
            		pics.eq(k).hide();
            	}
            }
	});
	//左右切换
	$("#next").click(function(){
		var nowpic = $("#lunbo-pic li img:visible");
		nowpic.hide();
		var num = nowpic.index()+1;
		if(num == 6){
			num = 0;
		}
		pics.eq(num).show();
        nums.eq(num).addClass("active").siblings().removeClass("active");
	});
}

function lunbo2(){
	$("#btnL").click(function(){
	    if($("#lunbo2-ul").css("left") == "0px"){
	    	$("#lunbo2-ul").css("left","-2016px");
	    }		
		$("#lunbo2-ul").animate({left:"+=252px"},800);
	});
	$("#btnR").click(function(){	
	    if($("#lunbo2-ul").css("left") == "-3024px"){
	    	$("#lunbo2-ul").css("left","-1008px");
	    }		
		$("#lunbo2-ul").animate({left:"-=252px"},800);
	});
}

