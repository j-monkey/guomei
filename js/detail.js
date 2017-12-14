define(['jquery','cookie'],function($,cookie){
return {
	loading:!function(){
		
		$str=window.location.search;
		var $id=$str.split('=')[1];
//		console.log($id);
	if($str.split('=')[0]=='id'){
		$.ajax({
			type:"post",
			url:"../php/index.php",
			async:true,
			data:{
				sid:$id
			},
			success:function(d){
//				console.log(d);
				var $getobj=JSON.parse(d)[0];
				console.log($getobj.title);
				console.log($getobj.price);
				console.log($getobj.url);
				$('.hgroup h1').html($getobj.title);
				$('#prdPrice').html('<em>¥</em>'+$getobj.price);
//				$('#spic img').attr("src","http://gfs17.gomein.net.cn/T17hJvB5__1RCvBVdK_450.jpg");
				$('#spic img').attr("src",$getobj.url);
				$('#bf img').attr('src',$getobj.url);
				$('#list img').attr("src",$getobj.url);
			}
		});
	
		
		
	}
		
		
	}(),
	//放大镜
    magnifier:!function(){
    	$('#spic').on('mouseenter',function(){
    	$('#sf').css({'visibility':'visible'});
    	$('#bf').css({'visibility':'visible'});
		$('#sf').on('mousemove',function(e){
			var $e=e||window.event;
			var $l=e.pageX-$('.wrap').offset().left-$('#sf').width()/2;
    		var $t=e.pageY-$('.wrap').offset().top-$('#sf').height()/2;
//  		console.log(e.clientX);
    		if($l<0){
    			$l=0;
    		}else if($l>$('#spic').width()-$('#sf').width()){
    			$l=$('#spic').width()-$('#sf').width();
    		}
    		
    		if($t<0){
    			$t=0;
    		}else if($t>$('#spic').height()-$('#sf').height()){
    			$t=$('#spic').height()-$('#sf').height();
    		}
    		
    		$('#sf').css({'left':$l+'px','top':$t+'px'});
    		$('#bf img').css({'left':-$l*2+'px','top':-$t*2+'px'});
		})
    	})
    	
    	$('#spic').on('mouseleave',function(){
    			$('#sf').css({'visibility':'hidden'});
    			$('#bf').css({'visibility':'hidden'});
    	})
    	
    	
    }(),
	codeshow:!function(){
		
		$('#mobtn').hover(function(){
			$('.ercode').show();
		},function(){
			$('.ercode').hide();
		})
		
	}(),
	num:!function(){
		$num=$('.prd-buttons .quantity').val();
//		console.log($num);
		$('.prd-buttons .plus').on('click',function(){
			$num++;
			$('.prd-buttons .quantity').val($num);
		})
		$('.prd-buttons .minus').on('click',function(){
			$num--;
			if($num<=1){
				$num=1;
			}
			$('.prd-buttons .quantity').val($num);
		})
		
		
	}(),
	tocart:!function(){
		//点击加入购物车
		$str=window.location.search;
		var $sid=$str.split('=')[1];
//		console.log($str.split('=')[1]);
		$('.prd-buttons .btn-addcart').on('click',function(){
			
			$doodsNum=$('.prd-buttons .quantity').val();
			$('#commerceItemQuantityId').text($doodsNum);
			var $obj={
				sid:$sid,
				goodsNum:$doodsNum
			}
//			console.log($obj);
			var $saveArr=[];
			$saveArr.push($obj);		//将对象放进数组用push	
			var $day=7;
			addCookie('good',JSON.stringify($saveArr),$day);
		})
	}()
}
})