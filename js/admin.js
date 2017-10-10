function tab_door(par,cont){

$(par +" "+"li").hover(
  function () {
    $(this).addClass("active");
  },
  function () {
    $(this).removeClass("active");
  }
);
}




//点击 页签切换
//par
//contag
//menu
//menutag
function click_tab(par,contag,menu,menutag){ 
var contArray=$(par+" "+contag);
var menuArray=$(menu+" "+menutag);
menuArray.each(function(i){
	$(this).click(function(){
		menuArray.each(function(n){
			if(i==n){
				if($(contArray[n]).attr("style"))$(contArray[n]).removeAttr("style");
				$(this).attr("class","hover");
			}else{
				$(this).removeAttr("class");
				$(contArray[n]).css("display","none");
			}
			
		})
	});
});
}





//页签切换
//par
//contag
//menu
//menutag
function noticetab(par,contag,menu,menutag){ 
var contArray=$(par+" "+contag);
var menuArray=$(menu+" "+menutag);
menuArray.each(function(i){
	$(this).hover(function(){
		menuArray.each(function(n){
			if(i==n){
				if($(contArray[n]).attr("style"))$(contArray[n]).removeAttr("style");
				$(this).addClass("active");
			}else{
				$(this).removeClass("active");
				$(contArray[n]).css("display","none");
			}
			
		})
	});
});
}


//list页面切换效果

//par
//contag
//menu
//menutag
function jscityre_sortToggle(par,contag,menu,menutag){ 
var contArray=$(par+" "+contag);
var menuArray=$(menu+" "+menutag);
menuArray.each(function(i){
	$(this).mousemove(function(){
		menuArray.each(function(n){
			if(i==n){
				if($(contArray[n]).attr("style"))$(contArray[n]).removeAttr("style");
				$(this).attr("class","active");
			}else{
				$(this).removeAttr("class");
				$(contArray[n]).css("display","none");
			}
			
		})
	});
});
}


   /*
   替换select为可编辑样式
   */
   function repselect(className){
   		
		var se=$("."+className);
		var seli=se.find("ul li");
   		se.hover(
			function(){
				$(this).css("z-index","9999");
				$(this).find(".select_item").addClass("active");			
				$(this).find("ul.item_list").css("display","block");
			},
			function(){
				$(this).css("z-index","");	
				$(this).find("ul.item_list").css("display","none");
				$(this).find(".select_item").removeClass("active");				

			}
		);
   		
		seli.click(function(){
			$(this).parent().parent().find("span.select_item").html($(this).find("span").html());
			$(this).parent().parent().find("input").val($(this).find("span").attr("dc"));
			if($(this).find("a").attr("dc")=='bldgcode'){
				$(this).parent().parent().find("input").attr('name','bldgcode');
				$(this).parent().parent().find("input").val('21');
				$('#houselr').val('0');
				$('#houseba').val('0');
			}
			$(this).parent().css("display","none");
		});
   }




/*列表滑过*/
function cityhover(par,cont){

$(cont).hover(
  function () {
    $(this).addClass("hover");
  },
  function () {
    $(this).removeClass("hover");
  }
);
$(par).hover(
  function () {
    $(cont).addClass("hover");
  },
  function () {
    $(cont).removeClass("hover");
  }
);
}


/* 鼠标滑过效果
id:left_hovemenu
h2_classname:tit_h
ha_hover_classname:tit_h active

content
div_classname:coldetail
*/
function leftmenu_hover(){
	var htit=$("#cglist .menu_tith");
	var pcont=$("#cglist div.menu_cgmore");
	var eselect=$("#cglist select");
	var cgmenu=$("#cgmenu");
	var cglist=$("#cglist");
	
	htit.hover(
		function(){
			$(this).addClass("hover");
			var ndiv=$(this).next().attr("class");
			
			//alert($(this).next().attr("tagName"));
			if(ndiv=='coldetail'){
				if($.trim($(this).next().text())!="")
				$(this).next().css("display","block");
				else
				{
					$(this).next().css("display","none");
					$(this).removeClass("hover");
				}
			}else{
				if($.trim($(this).next().next().text())!="")
				{
				$(this).next().next().css("display","block");
				}
				else
				{
					$(this).next().next().css("display","none");
					$(this).removeClass("hover");
				}
			}
		},
		function(){
			$(this).removeClass("hover");
			var ndiv=$(this).next().attr("class");
			if(ndiv=='menu_cgmore'){
				$(this).next().css("display","none");
			}else{
				$(this).next().next().css("display","none");
			}
		});
	
	pcont.hover(
		function(){
			//alert(1);
			//alert($(this).prev().tagName());
			$(this).css("display","block");
			var ndiv=$(this).prev().attr("tagName");
			
			if(ndiv=='H2'){
				$(this).prev().addClass("hover");
			}else{
				$(this).prev().prev().addClass("hover");
			}
		},
		function(){
			
			$(this).css("display","none");
			var ndiv=$(this).prev().attr("tagName");
			
			if(ndiv=='H2'){
				$(this).prev().removeClass("hover");
			}else{
				$(this).prev().prev().removeClass("hover");
			}

		}
	);
	
	$("#cgmenu").click(function(){

		if($("#cgmenu + #cglist").is(":visible")){
			$("#cgmenu + #cglist").hide();

		}else{
			$("#cgmenu + #cglist").show();

		}

	});

	
//	cglist.hover(

//		function(){
//			$("#cgmenu + #cglist").css("display","block");
		
//		},
//		function(){
//			$("#cgmenu + #cglist").css("display","none");			
//		});

	

}

//初始化头像102
$().ready(function(){
    $(".img .img-h img").each(function(e){
        var imgwidth = $(this).width();
        var imgheight = $(this).height();
		var zoomwith = (imgwidth*102)/imgheight;
		var zoomheight = (imgheight*102)/imgwidth;

        if(imgwidth >= imgheight){
			$(this).height(102);
			$(this).width(zoomwith);
			$(this).css("margin-left",-(zoomwith-102)/2);
		}else{
			$(this).width(102);
			$(this).height(zoomheight);
		}

    });
});



//初始化头像80
$().ready(function(){
    $(".img80 .img-h img").each(function(e){
        var imgwidth = $(this).width();
        var imgheight = $(this).height();
		var zoomwith = (imgwidth*80)/imgheight;
		var zoomheight = (imgheight*80)/imgwidth;

        if(imgwidth >= imgheight){
			$(this).height(80);
			$(this).width(zoomwith);
			$(this).css("margin-left",-(zoomwith-80)/2);
		}else{
			$(this).width(80);
			$(this).height(zoomheight);
		}

    });
});



