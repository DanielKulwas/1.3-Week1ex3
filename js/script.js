(function($){
$(document).ready(function(){
	

	
var nav=$("#nav"),
	hamburger=$(".resmenu");

nav.hide()

hamburger.on("click",function(){

	nav.stop().slideToggle(800);
	
}
);
	
});
})(jQuery);