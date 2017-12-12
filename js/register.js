define(['jquery','jquery.drag'],function($){
	
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
			var $reg=/^{\w||[\u2E80-\u9FFF]}{4,20}$/;
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
		//拖动滑块运动
//		$('#boxCheck .slider-min').on('mousemove',function(e){
//			var e=e||window.event;
//			console.log(e.pageX);
//			console.log($('#boxCheck .slider-min').offset().left);
//			
//		})
		
		
		
		
	}
		//点击注册
		
	
})
