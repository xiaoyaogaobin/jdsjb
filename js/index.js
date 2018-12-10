$(function(){
	// 设置出现底部出现时间
				//获得浏览器高度
				var lhqh = $(window).height();
				
				$(document).scroll(function(){
					//创建一个变量 获得当前滚动条的值
				var sTop = $(document).scrollTop();
					// 获得body距离
					var bdh = $(document).height();
					
					// 判断滚动条大于距离显示
				if(sTop>20){
					$('.searchTop').css('background','red');
				}else{
					// 判断滚动条小于距离隐藏
					$('.searchTop').css('background','transparent');
					$('.ftop').css('display','none');
				}
				if(sTop>1000){
					$('.ftop').css('display','bl_twoock');
				}
				
				if(bdh-sTop<=lhqh){
					var img = '<div class="spcon"><div class="spconl"><img src="img/bijibe.jpg"/><span class="spconlwz"><img src="img/jingdongjingxuan.jpg"/>联想(Lenovo)330C15.6英寸英特尔八代酷睿商务影音笔记本电脑(i5-8250U 4G 1T+128G MX110 Office)黑</span><p class="similar-product-info"><span class="similar-product-price">¥&nbsp;<span class="big-price">3999</span></span><span class="guess-button j_see_similar" >看相</span></div><div class="spconr"><img src="img/shexingtou.jpg"/><span class="spconlwz"><img src="img/jingdongjingxuan.jpg"/> 盯盯拍mini行车记录仪 1080P高清广角 WiFi连接 智能管理 华为智芯 黑色</span><p class="similar-product-info"><span class="similar-product-price">¥&nbsp;<span class="big-price">199</span></span><span class="guess-button j_see_similar">看相似</span></div></div>'
								
							$('#charu').append(img)
				}
				
				})
					
	//返回头部
	$('.top').click(function(){
			$('body,html').animate({'scrollTop':'0'})
	})
	$('.ftimg').click(function(){
			$('body,html').animate({'scrollTop':'0'})
	})
	
})
