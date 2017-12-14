define(['jquery','jquerydrag'],function($,drag){
	
	return{
		tabchange:function(){
			var $tab=$('.exchange').children();
//			console.log($tab);
			$tab.on('click',function(){
				$index=$(this).index();
				$tab.removeClass('active');
				$(this).addClass('active');
				$('.form').eq($index).show().siblings('.form').hide();
			})
			
		},
		//获得焦点提示出现事件	
		formblur:function(){
			var $input=$('.form-show').children('input');
			var $reg=/^(\w|[\u2E80-\u9FFF]){4,20}$/;
			var $flag=false;
			$input.on('focus',function(){
				$(this).siblings('.tips').css({'visibility': 'visible'});
			//验证用户名是否注册
			$('#username input').on('blur',function(){
			if($(this).val()){
//				console.log($reg.test($.trim($(this).val())));
				if($reg.test($.trim($(this).val()))==true){
				$.ajax({
					type:'post',
					url:'../php/register.php',
					data:{
						username:$('#username input').val()
					},
					success:function (d){
						if(!d){
							$('#username i').show();
							$('#username .tips').css({'visibility': 'hidden'});
						}else{
							
							$('#username .tips').text('用户名已被注册！');
							$('#username input').val('');
						}
					}
				})
			}else{
				$('#username .tips').text('用户名格式不正确！');
				
			}
			}else{
				$('#username .tips').text('用户名不能为空！');
			}
			})
					
			});
		//验证密码长度事件
		$('#password input').on('blur',function(){
			if($(this).val().length>=6 && $(this).val().length<=20){
				$('#password i').show();
				$('#password .tips').css({'visibility':'hidden'});
			}else{
				$('#password .tips').text('密码设置不正确！');
				$('#password input').val('');
				
			}
			
		})
		//确认密码事件
		
		$('#checkpassword input').on('blur',function(){
			if($(this).val()&& $('#password input').val()){
				if($('#checkpassword input').val()==$('#password input').val()){
				$('#checkpassword i').show();
				$('#checkpassword .tips').css({'visibility':'hidden'});
				}else{
					$('#checkpassword .tips').text('两次输入密码不匹配！');
					$('#checkpassword input').val('');
				}
			}else{
				$('#checkpassword .tips').text('请再次确认密码！');
			}
		})
//		拖动滑块运动
		$('#boxCheck .slider-min').drag();
		$('#boxCheck .slider-min').on('mousemove',function(){
			var $left=$(this).position().left;
			if($left>0&&$left<=150){
				$left=0;
				$('#boxCheck .slider-min').animate({'left':$left},800)
				
			}else if($left>=150&&$left<250){
				$left=250;
				$('#boxCheck .slider-min').animate({'left':$left},800);
				$('#boxCheck .slider-box').text('验证通过');
				$('#boxCheck .slider').css({'background':'green'});
				$flag=true;
//				
			}
		
		})
		//点击注册
		$('#submit').on('click',function(){
	var $totalflag=$('#username input').val()&& $('#password input').val()&&$('#checkpassword input').val()

			if(!$totalflag){
				alert('请输入完整注册信息！');
				window.location.reload();
			}else{
				$.ajax({
					type:'post',
					url:'../php/register.php',
					data:{
						username:$('#username input').val(),
						password:$('#password input').val()
					},
					success:function(d){
						console.log(d);
						if(!d){
						confirm('注册成功！立即登录?')?window.location.href='login.html':window.location.reload();
						}else{
						alert('注册信息有误！');
						}
					}
				})
				
			}
		})

	}
		
		
	}	
	
})
