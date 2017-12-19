define(['jquery','cookie'],function($,cookie){
	return{
		getNum:!function(){
			if(getCookie('good')){
				var $resultobj=JSON.parse(getCookie('good'))[0];
				var $sid=$resultobj.sid;
				var $goodsNum=$resultobj.goodsNum;
//				console.log($resultobj);
//				console.log(Boolean($('#sid').val()));
				//如果不存在该商品标志，则不会走这行，避免detail页面使用此方法；
				if(Boolean($('#sid').val())){
//					console.log($sid==$('#sid').val());
					var $value,$tnum,$price;
					if($sid==$('#sid').val()){	
						//如果该商品已经存在
						$value=$('.counter .dytest').val();
						$tnum=$('.counter .dytest').val($goodsNum-0+$value);
						$price=$('.cart-good-real-price span').text();
						$('.s-totalprice span').html($tnum*$price);
					}
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
					console.log($data.url);
					var $createCartContent='<ul>';
					$createCartContent+='<li class="container1"><input type="checkbox" checked=""/></li>';
					$createCartContent+='<li class="container2"><img src="'+$data.url+'"/></li>';
					$createCartContent+='<li class="container3"></li><li class="cart-good-real-price">¥&nbsp;<span>'+$data.price+'</span></li>';
					$createCartContent+='<li class="counter"><div><a href="javascript:void(0);" class="gui-count-btn gui-count-sub gui-count-disabled">-</a>';
					$createCartContent+='<input  class="dytest" type="text" value="'+$goodsNum+'">';
					$createCartContent+='<a href="javascript:void(0);" class="gui-count-btn gui-count-add">+</a></div></li>';
					$createCartContent+='<li class="s-totalprice">¥&nbsp;<span>'+$goodsNum*$data.price+'</span></li>';
					$createCartContent+='<li class="delete"><a href="javascript:void(0)">删除</a></li>';
					$createCartContent+='<li id="sid" style="width:0;height:0;visibility:hidden">'+$data.sid+'</li></ul>';
					
					$('.list-content').append($createCartContent);
						}
					});	
					}	
					
			}
		}()
	}
	
})