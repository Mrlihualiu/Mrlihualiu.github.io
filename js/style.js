$(function(){
	change();
});
function change(){
	var fch = $("#nav ul li a");
	$(window).scroll(function(){
	    var top = $(document).scrollTop();
	    console.log(top);
	    for(var i=0;i<fch.length;i++){
	    	if(top>=i*680 && top<(i+1)*680){
                fch.eq(i).addClass("active");
                for(var j=0;j<fch.length;j++){
                	if(i != j){
                		fch.eq(j).removeClass("active");
                	}
                }
	    	}
	    }
	});
}