$(function(){
	changecolor();
    carshow("#zhuanti",".header-a-submenu");
    carshow("#phonepic",".phone-show");
    carshow(".phone-show",".phone-show");
    more();
});
function carshow(parentID,showID){
	$(parentID).hover(
		function(){
			$(showID).show();
		},
		function(){
			$(showID).hide();
		});
} 
function changecolor(){
	var aes = $(".content-nav .content-nav-header li");
	aes.click(function(){
		$(this).addClass("content-nav-first").siblings().removeClass("content-nav-first");
	});
}
function more(){
	var more = $("#button");
	more.click(function(){
		var nowheight = $(".content-nav-content").height();
		if(nowheight >= 2580){
			alert("没有更多了！");
		}else{
			nowheight += 740;
		}
		
		$(".content-nav-content").height(nowheight);
	});
}