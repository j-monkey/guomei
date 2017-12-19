require(['register','login','index','detail','cart'],function(register,login,index){
	register.tabchange();
	register.formblur();
	login.loginTabChange();
	login.appearImg();
	login.Submit();

	
})