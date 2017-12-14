define(['jquery','cookie'],function ($,cookie){
	return{
		loginTabChange:function(){
			//tab切换
			$('.loginTab').on('click',function (){
				$index=$(this).index();
				$('.loginTab a').removeClass('cur');
				$('.login-content .changeContent').eq($index).show().siblings('.changeContent').hide();
				$(this).find('a').addClass('cur');
			})
		},
		appearImg:function (){
			var $timer;
			$('#barcodeId .qrcode-Image').on('mouseenter',function(){
				$(this).stop().animate({left:'40px'},'slow');
				 $timer=setInterval(function(){
					$('#barcodeId .qrcode-help').show();
				},500);
				
			}).on('mouseleave',function(){
				clearInterval($timer);
				$('#barcodeId .qrcode-Image').stop().animate({left:'85px'},'slow');
				$('#barcodeId .qrcode-help').hide();
			})
		},
		Submit:function(){
			$('#login-submit').on('click',function(){
				console.log($('#user').val() && $('#password').val());
				if($('#user').val() && $('#password').val()){
					$.ajax({
						type:'post',
						url:'../php/login.php',
						data:{
							username:$('#user').val(),
							password:$('#password').val()
						},
						success:function(d){
							if(!d){
							$('.err-tips').css({'visibility':'visible'});
							$('.err-tips span').text('用户名或密码不匹配，请重新输入！');
							}else{
								$('.err-tips').css({'visibility':'hidden'});
								//存cookie
								var $obj = {
				               		username:$('#user').val(),
				               		password:$('#password').val()
				               	}

								var $saveArr=[];
								$saveArr.push($obj);
								var $day=7;
								addCookie('user',JSON.stringify($saveArr),$day);
								confirm("登陆成功")?window.location.assign("index.html"):"登录失败请重试";
								
							}
						}
					})
					
				}else{
					$('.err-tips span').text('用户名或密码不能为空！');
					$('.err-tips').css({'visibility':'visible'});
				}
			})
		}
	}
	
})