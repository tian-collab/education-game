/*$(".pic").hover(function(){
		$('.pic_txt',this).stop().animate({"opacity":"1"},400);
	},function(){
		$('.pic_txt',this).stop().animate({"opacity":"0"},400);
	});
$(".qczy_cpzsm ul li").hover(function(){
		$(".pic_txt",this).stop().animate({"opacity":"1"},400);
	},function(){
		$(".pic_txt",this).stop().animate({"opacity":"0"},400);
	});	
$(".pic_txtan,.cp_tcr").click(function(){
		$('.cp_tc,.mengban,.cp_tcr').stop().fadeIn();
});*/
$(".cp_tcr").click(function(){
		$('.cp_tc,.mengban,.cp_tcr').stop().fadeOut();
});
$(".slzss ul li").click(function(){
		$('.cp_tc,.mengban',this).stop().fadeIn();
		$('.cp_tcr').stop().fadeIn();
});
$(".qczy_cpzsm ul li").click(function(){
		$('.cp_tc,.mengban',this).stop().fadeIn();
		$('.cp_tcr').stop().fadeIn();
});
$(".fwyzcs ul li").click(function(){
		$('.cp_tc,.mengban',this).stop().fadeIn();
		$('.cp_tcr').stop().fadeIn();
});













//返回顶部
$(".fhdb").click(function(){
		$('html, body').animate({scrollTop:0}, 600);
});

//
$(window).load(function() {
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false
	});
});
$(document).ready(function(){
	
	$(".flexslider").hover(function(){
		$("#btn_prev_ad,#btn_next_ad").fadeIn()
	},function(){
		$("#btn_prev_ad,#btn_next_ad").fadeOut()
	});
});
<!--//--><![CDATA[//><!--
//图片滚动列表 16css.com
var Speed = 1; //速度(毫秒)
var Space = 5; //每次移动(px)
var PageWidth = 305; //翻页宽度
var fill = 0; //整体移位
var MoveLock = false;
var MoveTimeObj;
var Comp = 0;
var AutoPlayObj = null;
GetObj("List2").innerHTML = GetObj("List1").innerHTML;
GetObj('ISL_Cont').scrollLeft = fill;
GetObj("ISL_Cont").onmouseover = function(){clearInterval(AutoPlayObj);}
GetObj("ISL_Cont").onmouseout = function(){AutoPlay();}
AutoPlay();
function GetObj(objName){if(document.getElementById){return eval('document.getElementById("'+objName+'")')}else{return eval('document.all.'+objName)}}
function AutoPlay(){ //自动滚动
 clearInterval(AutoPlayObj);
 AutoPlayObj = setInterval('ISL_GoDown();ISL_StopDown();',3000); //间隔时间
}
function ISL_GoUp(){ //上翻开始
 if(MoveLock) return;
 clearInterval(AutoPlayObj);
 MoveLock = true;
 MoveTimeObj = setInterval('ISL_ScrUp();',Speed);
}
function ISL_StopUp(){ //上翻停止
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0){
  Comp = fill - (GetObj('ISL_Cont').scrollLeft % PageWidth);
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrUp(){ //上翻动作
 if(GetObj('ISL_Cont').scrollLeft <= 0){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft + GetObj('List1').offsetWidth}
 GetObj('ISL_Cont').scrollLeft -= Space ;
}
function ISL_GoDown(){ //下翻
 clearInterval(MoveTimeObj);
 if(MoveLock) return;
 clearInterval(AutoPlayObj);
 MoveLock = true;
 ISL_ScrDown();
 MoveTimeObj = setInterval('ISL_ScrDown()',Speed);
}
function ISL_StopDown(){ //下翻停止
 clearInterval(MoveTimeObj);
 if(GetObj('ISL_Cont').scrollLeft % PageWidth - fill != 0 ){
  Comp = PageWidth - GetObj('ISL_Cont').scrollLeft % PageWidth + fill;
  CompScr();
 }else{
  MoveLock = false;
 }
 AutoPlay();
}
function ISL_ScrDown(){ //下翻动作
 if(GetObj('ISL_Cont').scrollLeft >= GetObj('List1').scrollWidth){GetObj('ISL_Cont').scrollLeft = GetObj('ISL_Cont').scrollLeft - GetObj('List1').scrollWidth;}
 GetObj('ISL_Cont').scrollLeft += Space ;
}
function CompScr(){
 var num;
 if(Comp == 0){MoveLock = false;return;}
 if(Comp < 0){ //上翻
  if(Comp < -Space){
   Comp += Space;
   num = Space;
  }else{
   num = -Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft -= num;
  setTimeout('CompScr()',Speed);
 }else{ //下翻
  if(Comp > Space){
   Comp -= Space;
   num = Space;
  }else{
   num = Comp;
   Comp = 0;
  }
  GetObj('ISL_Cont').scrollLeft += num;
  setTimeout('CompScr()',Speed);
 }
};
//--><!]]>