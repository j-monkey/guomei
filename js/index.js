define(['jquery','cookie'],function($,cookie){
	return{
		username:!function(){
//cookie中拿到的是string类型的数据，JSON.parse()将数据转化为数组类型
			//拿到最新的一条数据
		if(getCookie('user')){
			var $cookieData=JSON.parse(getCookie('user'))[0];
			var $username=$cookieData.username;
			$('.top-body .nologin').css({'display':'none'})
			$('.top-body .loginname').css({'display':'block'}).find('.gome-user a').text($username);
			
		}
		//退出账户
		$('.exit').on('click',function(){
			$('.top-body .loginname').css({'display':'none'});
			$('.top-body .nologin').css({'display':'block'})
		})

		//搜索框头部
		$('.searchType').hover(function(){
			$(this).find('.search-type-list').css({'display':'block'});
		},function(){
			$(this).find('.search-type-list').css({'display':'none'});
		})
		
		}(),
		banner:!function(){
			//轮播图
			var $index=0;
			var $nexli=$('.focus_box li:first').clone();
				$nexli.appendTo($('.focus_box'));
			
			//通用函数
			function move($index){
				// console.log($index);
				if($index==0){
				$('.edit-mode li').removeClass('cur');
				$('.edit-mode li').eq($index).addClass('cur');
				$('.focus_box').css({'left':-750*$index});
				}
				else if($index==7){
				$('.edit-mode li').removeClass('cur');
				$('.edit-mode li').eq($index).addClass('cur');
				$('.focus_box').css({'left':-750*$index});
				}else{
				$('.edit-mode li').removeClass('cur');
				$('.focus_box').animate({'left':-750*$index});
				$('.edit-mode li').eq($index).addClass('cur');
				}
				
			}
			
			$('.nex').on('click',function(){
				$index++;
				if($index<=0){
					$index=0;
				}else if($index>=7){
					$index=7;
				}
				move($index);
				
			})
			$('.pre').on('click',function(){
				$index--;
				if($index<=0){
					$index=0;
				}else if($index>=7){
					$index=7;
				}
				move($index);
			})
			//自动轮播
			$timer = setInterval(function(){
				$index++;
				if ($index>=8) {
					$index = 0;	
				}
				move($index);
				// $('.edit-mode li').eq($index).trigger('click');
			},2000)
			//鼠标经过，停止
			$('.banner_box').on('mouseenter',function(){
				clearInterval($timer);
			}).on('mouseleave',function(){
				$timer = setInterval(function(){
					$index++;
					if ($index>=8) {
						$index = 0;
					}
					move($index);
					// $('.edit-mode li').eq($index).trigger('click');
				},2000)
			})
			$('.edit-mode li').on('click',function(){
				$index=$(this).index();
				move($index);
			})
			
		}(),
		load:!function(){
			$.ajax({
				url:'../php/index.php',
				type:'post',
				dataType:'json',
				async:true,
				success:function(d){
					for(var $i in d){
						//console.log(d[$i]);
						var $createli='<li>';
						$createli+='<a href="detail.html?id='+d[$i].sid+'">';
						$createli+='<img src="http://gfs17.gomein.net.cn/T1YDZvBCKv1RCvBVdK_210.jpg"/>';
						$createli+='<p>'+d[$i].title+'</p><p>'+d[$i].price+'</p></a></li>';
						$('.createli-content ul').append($createli);
						
					}
				}
			})
			
		}(),
		//每日必买
		toBuy:!function(){
			$('.l-content').hover(function(){
			$('.but').show();
			$('.but-pre').on('click',function(){
				$('.l-content ul').animate({'left':0});
			})
			$('.but-nex').on('click',function(){
				$('.l-content ul').animate({'left':-980});
			})
		},function(){
			$('.but').hide()
		})
		}(),
		//底部特效
		floorhover:!function(){
			$('.qrcode-section .wx').hover(function(){
			$('.wx div').css({'display':'block'});
		},function(){
			$('.wx div').css({'display':'none'});
		})
		
		$('.qrcode-section .wap').hover(function(){
			$('.wap div').css({'display':'block'});
		},function(){
			$('.wap div').css({'display':'none'});
		})
		
		}(),
		floorlist:!function(){
			$(window).on('scroll',function (){
				var $scrollTop=$(this).scrollTop();			//得到滚动高度
				//console.log($scrollTop);
				if($scrollTop>500){							//导隐藏航出现和
					$('.floor-list').show();
				}else{
					$('.floor-list').hide();
				}
				$height=$('.createli-content').height();
				//console.log($height);
				$floor =Math.floor(($scrollTop-700)/$height);
				//console.log($floor);
				//$('.floor-list').not('.last').eq($floor).addClass('active').siblings('li').removeClass('active');
				$('.floor-list .floor-item').eq($floor).addClass('active').siblings('.floor-item').removeClass('active');
			})
			//点击到达对应楼层
			$('.floor-list .floor-item').on('click',function(){
				$index=$(this).index();
				$(this).addClass('active').siblings('.floor-item').removeClass('active');
				$('body,html').animate({scrollTop:$index*1000});
			})
			//回到顶部和底部
			$('.floor-list .first').on('click',function(){
				$('body,html').animate({scrollTop:0});
				
				})
			$('.floor-list .last').on('click',function(){
				console.log($(document).height());
				console.log($(window).height());
				
				$('body,html').animate({scrollTop:$(document).height()-$(window).height()});
				})
		}()
			
			
	}
})