define(['jquery','cookie'],function($,cookie){
	return{
		getNum:!function(){
			if(getCookie('good')){
				var $resultobj=JSON.parse(getCookie('good'))[0];
				var $sid=$resultobj.sid;
				var goodsNum=$resultobj.goodsNum;
				console.log($('#sid').val());
				if($sid==$('#sid').val()){
					
				}else{
				$.ajax({
					type:"post",
					url:"../php/index.php",
					async:true,
					data:{
						sid:$sid
					},
					success:function(d){
						$data=JSON.parse(d)[0];
						console.log(JSON.parse(d)[0]);
						
					}
				});	
				}
				
				
			}
		}()
	}
	
})