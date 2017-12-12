
dragBox = {

		//给dragBox定义了一个属性  element
		element : null ,
		disX : 0 ,
		disY : 0 ,
		init : function(id){
			this.element = document.getElementById(id);
			return	this ;
		},
		//鼠标按下的时候，调用
		startMove : function(x,y){
			this.disX = x ;
			this.disY = y ;
		},
		//移动中，并传入按下的坐标
		moveIng : function(clientX,clientY){
    		this.element.style.left = clientX - this.disX + "px";
    		this.element.style.top = clientY - this.disY + "px";
    	},
    	//拖拽结束
    	endMove : function(){
    		document.onmouseup = function(){
    			document.onmousemove = null;
    			document.onmouseup = null;
    		}
    	},
		runBox : function(){
			var	self = this ;
			this.element.onmousedown = function(evt){
				var	e = evt || window.event ; 
				//console.log(this)		结果为div#box
				//此时this指的是box
				self.startMove(e.offsetX,e.offsetY);
				document.onmousemove = function(evt){
					var	ee = evt || window.event ;
					self.moveIng(ee.clientX,ee.clientY);
				}
				//鼠标松开
				self.endMove()
			}
		}
}
		

